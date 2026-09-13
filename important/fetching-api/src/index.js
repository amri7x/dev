const containerEl = document.getElementById('app')
const formEl = document.getElementById('form-input')

const createPostElement = (post) => {
    const postCard = document.createElement('div')
    postCard.classList.add('postCard')
    
    const postTitle = document.createElement('p')
    postTitle.classList.add('postTitle')
    postTitle.textContent = post.title
    
    const postBody = document.createElement('p')
    postBody.classList.add('postBody')
    postBody.textContent = post.body

    const hrEl = document.createElement('hr')

    postCard.append(postTitle, postBody, hrEl)
    return postCard
}

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
        const fragment = document.createDocumentFragment()
        
        const postsArr = data.slice(0, 5).map(post => createPostElement(post))
        fragment.append(...postsArr)
        
        containerEl.appendChild(fragment)
    })

formEl.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(formEl)
    const postTitle = formData.get('postTitle')
    const postBody = formData.get('postBody')
    const data = {
        title: postTitle,
        body: postBody 
    }
    const postData = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }

    fetch('https://jsonplaceholder.typicode.com/posts', postData)
        .then(res => res.json())
        .then(newPost => {
            const newPostCard = createPostElement(newPost)
            containerEl.prepend(newPostCard)
        })
})