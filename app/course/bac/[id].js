// lessons will be populated at build time by getStaticProps()
export default function Lesson({ parts }) {
    return (
        <ul>
            {lessons.map((lesson) => (
                <li>{lesson.title}</li>
            ))}
        </ul>
    )
}

// This function gets called at build time on server-side.
// It fetches the lessons from an external API endpoint.
export async function getStaticProps() {
    const res = await fetch('https://.../lessons')
    const lessons = await res.json()

    return {
        props: {
            parts,
        },
    }
}
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://.../posts')
    const parts = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            parts,
        },
    }
}
The 
