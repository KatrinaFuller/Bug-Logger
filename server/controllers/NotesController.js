import express from 'express';
import NotesService from '../services/NotesService';

let _notesService = new NotesService().repository

export default class NotesController {
  constructor() {
    this.router = express.Router()
      .post('', this.createNote)
      .delete('/:id', this.deleteNoteById)
  }

  async createNote(req, res, next) {
    try {
      let data = await _notesService.create(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async deleteNoteById(req, res, next) {
    try {
      await _notesService.findOneAndRemove({ _id: req.params.id })
      res.send("deleted note")
    } catch (error) {
      next(error)
    }
  }
}