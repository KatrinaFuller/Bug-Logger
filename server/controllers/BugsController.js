import express from 'express';
import Axios from "axios";
import BugService from '../services/BugsService';

let _bugService = new BugService().repository

const _bugApi = Axios.create({
  baseURL: 'https://localhost:3000/api'
})

export default class BugController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAll)
      .get('/:id', this.getById)
      .get('/:id/notes', this.getNotesByBug)
      .post('', this.createBug)
      .put('/:id', this.editBugById)
    // .delete('/:id', this.changeBugStatus)
    // .delete('/:id/notes/:id', this.deleteNoteFromBugById)
  }

  async getAll(req, res, next) {
    try {
      let data = await _bugService.find({})
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      let data = await _bugService.findById(req.params.id)
      if (!data) {
        throw new Error("Invalid Id")
      }
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async getNotesByBug(req, res, next) {
    try {
      let data = await _bugService.find({ bug: req.params.id, authorId: req.session.uid })
      if (!data) {
        throw new Error("Invalid Id")
      }
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async createBug(req, res, next) {
    try {
      req.body.authorId = req.session.uid
      let data = await _bugService.create(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async editBugById(req, res, next) {
    try {
      let data = await _bugService.findOneAndUpdate({ _id: req.params.id, authorId: req.session.uid }, req.body, { new: true })
      if (!data) {
        throw new Error("Invalid Id")
      }
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }




}