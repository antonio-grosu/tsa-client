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



// Pentru parts
// 1. 2 texte
// 2. Imagine cu text dedesubt
// 3. Imagine cu Text langa
// 4. Problema care are 4 raspunsuri si doar unul este corect , hint , explicatie
// 5.Definitie si explicatie

//Trebuie facuta urmatoarea modificare  si anume
// de creat in db cursul de bac si apoi
// get lesson din url in getStaticProps
// apoi pt acel lesson se creeaaza intr un state array ul practic si se parcruge in mod clasic
// componenta Card Lesson renderizeaza fiecare part si la apasarea butonului trece mai departe
// in cazul finalizarii , user-ul primeste un Screen cu lesson complete si primestee XP

