import  PocketBase from 'pocketbase';
import Link from 'next/link';
import styles from './styles.module.css';

const pb = new PocketBase('http://127.0.0.1:8090');

async function getNotes() {
  const res = await pb.collection('NoteStuffIdk').getList(1, 30);
  return res?.items as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();
  console.log('notes', notes)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
    </div>
  )
}

function Note({ note }: any) {
  const {id, title, notes, created} = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2>{title}</h2>
        <h5>{notes}</h5>
        <p>{created}</p>
      </div>
    </Link>
  )
}