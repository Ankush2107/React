import Avatar from './Avatar'
import './App.css'

function App() {
  return (
    <div>
        <Avatar src="https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D"
         height="150px"
          width="150px" />

        <Avatar src="https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D" height="150px" width="150px" />

        <Avatar src="https://plus.unsplash.com/premium_photo-1676479610745-fd38d98abb1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRvZ3N8ZW58MHx8MHx8fDA%3D" height="150px" width="150px">

        <span>Child tag</span>
        </Avatar>
    </div>
  )
}

export default App
