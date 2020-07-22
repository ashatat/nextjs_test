import { getNoteByID } from '../../database/queries/notes'
// render Note component by note info
function Note({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <p style={{textAlign: 'center'}}>{description}</p>
    </div>
  );
}

// get note by Id using getServerSideProps or getStaticProps, Think about it !
async function getServerSideProps({ params }) {
  const { id } = params;
  const { rows } = await getNoteByID(id);
  const { title, description } = rows[0];

  return {
    props: { title, description }, // will be passed to the page component as props
  }
}

export {getServerSideProps};

export default Note;
