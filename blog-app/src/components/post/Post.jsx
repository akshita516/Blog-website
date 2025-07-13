import './post.css';
import { Link } from "react-router-dom";

export default function Post(){
    return(
        <div className="post">
            <img className="postImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNY394r0dZXVMYO_UXvNx4cF5SJVQAY_t5Hg&s" alt="tulips" />
            <div className="postInformation">
                <div className="postCategories">
                    <span class="postCategory">Nature</span>
                    <span class="postCategory">Flowers</span>
                </div>
                <div className="postTitle">
                     <Link className="link" to="/post:abc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, tenetur.</Link>
                </div>
                <hr/>
                <span className="postDate">1 hour ago</span>
                <p className="postDescription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt repellendus voluptate nulla? Blanditiis enim tempore dolorem, at, quaerat laborum qui pariatur, voluptates doloremque officia quibusdam animi soluta optio ipsam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quam voluptate id numquam aliquam adipisci tempore architecto doloribus recusandae, atque iure accusantium dolorum. Laboriosam reprehenderit quasi incidunt fuga obcaecati quisquam!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos non similique, magni voluptatum fuga provident culpa molestiae quaerat accusamus tempore modi eveniet quibusdam placeat quidem, mollitia soluta vitae atque eius.
                </p>
                <span className="postAuthor"> <b>Author: </b>Akshita M B</span>
            </div>
        </div>
    )
}