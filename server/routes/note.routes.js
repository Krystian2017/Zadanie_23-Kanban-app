import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';

const router = new Router();

// Add a new Note
router.route('/notes').post(NoteController.addNote);

// Delete a Note by noteId
router.route('/notes/:noteId').delete(NoteController.deleteNote);

// Edit a Note by noteId
router.route('/notes/:noteId').put(NoteController.editNote);


export default router;

// {
//   "note": {
//     "task": "New Note"
//   },
//   "laneId": "da1de992-0b9a-4a18-943b-201fc40dc36b"
// }