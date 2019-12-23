import express from 'express';
import Axios from "axios";
import BugsService from '../services/BugsService';

let _bugsService = new BugsService().repository

// const _bugApi = Axios.create({
//   baseURL: 'https://localhost:3000/api'
// })

export default class BugsController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAll)
      .get('/:id', this.getById)
      .get('/:id/notes', this.getNotesByBug)
      .post('', this.createBug)
      .put('/:id', this.editBugById)
      .put('/:id', this.cannotEditClosedBug)
      .delete('/:id', this.changeBugStatus)
    // .delete('/:id/notes/:id', this.deleteNoteFromBugById)
  }

  async getAll(req, res, next) {
    try {
      let data = await _bugsService.find({})
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      let data = await _bugsService.findById(req.params.id)
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
      let data = await _bugsService.find({ bug: req.params.id, authorId: req.session.uid })
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
      let data = await _bugsService.create(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async editBugById(req, res, next) {
    try {
      let data = await _bugsService.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      if (!data) {
        throw new Error("Invalid Id")
      }
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async cannotEditClosedBug(req, res, next) {
    try {
      if (closed == false) {
        let data = await _bugsService.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        if (!data) {
          throw new Error("Invalid Id")
        }
        return res.send(data)
      }
      else {
        return "You can not edit a closed bug"
      }
    } catch (error) {
      next(error)
    }
  }

  async changeBugStatus(req, res, next) {
    try {
      await _bugsService.findOneAndRemove(req.params.id)
      res.send("changed bug status to closed")
    } catch (error) {
      next(error)
    }
  }



}