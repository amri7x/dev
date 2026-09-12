const containerEl = document.getElementById('app')
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
        const fragment = document.createDocumentFragment()

        const titleEl = document.createElement('h1')
        titleEl.textContent = `Blog Post`
        fragment.appendChild(titleEl)
        
        const postsArr = data.slice(0, 5).map(post => {
            const postCard = document.createElement('div')
            
            const postTitle = document.createElement('p')
            postTitle.classList.add('post')
            postTitle.textContent = post.title
            
            const postBody = document.createElement('p')
            postBody.textContent = post.body
            
            postCard.append(postTitle, postBody)
            return postCard
        })
        fragment.append(...postsArr)
        
        containerEl.classList.add('container')
        containerEl.appendChild(fragment)
    })