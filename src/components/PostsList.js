import { useState } from 'react'; 
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList({isPosting, onStopPosting}) {

    const [myData, setMyData] = useState([
        {
            id: 1,
            author: "Jerome Morales",
            body: "Just want to get rich and get laid to lovely, sexy and hot women of all races on earth." 
        },

        {
            id: 2,
            author: "Elon Musk",
            body: "I dream of us becoming a space faring civilization" 
        },

        {
            id: 3,
            author: "Mark Zuckerberg",
            body: "I revolutionized social media." 
        }

    ]);

    const [ enteredBody, setEnteredBody ] = useState('');
    const [ enteredAuthor, setEnteredAuthor ] = useState('');


    function addNewPost(event) {
        event.preventDefault();
        let copyData = [...myData];
        let newEntry = {id: myData.length + 1, author: enteredAuthor, body: enteredBody};
        // setMyData([copyData, newEntry]);
        setMyData([...copyData, newEntry]);
        // console.log(copyData);
        onStopPosting();
        
     
    }
    
    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    return (
        <>
        {isPosting ? 
        <Modal onClose={onStopPosting}>
        <NewPost 
        onBodyChange={bodyChangeHandler} 
        onAuthorChange={authorChangeHandler}
        onAddNewPost={addNewPost}
        onCancel={onStopPosting}
        />
    </Modal> : null
        }
        
            <ul className={classes.posts}>
                {myData.map((post, index) => <Post key={index} author={post.author} body={post.body}/>)}
            </ul>
        </>
    )
}

export default PostsList;