import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import NoteItemBody from "./NoteItemBody";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const colors = ['#A6DCEF', '#F2AAAA', '#F6C6EA', '#F3ECB8']
const randomBgColor = () => colors[Math.floor(Math.random() * colors.length)]

export default function NoteItem({ note, deleteNote, archiveNote }) {

  const MySwal = withReactContent(Swal)

  return (
    <div className="note__item" style={{ backgroundColor: randomBgColor() }}>
      <NoteItemBody
        title={note.title}
        createdAt={note.createdAt}
        body={note.body}
      />
      <div className="note__item-actions">
        <DeleteButton onClick={() => {
          MySwal.fire({
            title: 'Kamu yakin?',
            text: "Kamu tidak dapat mengembalikan ini!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, hapus aja!'
          }).then((result) => {
            if (result.isConfirmed) {
              deleteNote(note.id)
              Swal.fire(
                'Terhapus!',
                'Catatanya sudah dihapus',
                'success'
              )
            }
          })
        }} />
        <ArchiveButton
          archived={note.archived}
          onClick={() => archiveNote(note.id)}
        />
      </div>
    </div>
  );
}

