import './singlePostComponent.css';
import Single from '../pages/single/Single.jsx';

export default function SinglePostComponent() {
    return(
        <div className="single">
            <div className="singlePost">
                <div className="singlePostWrapper">
                    <img className="singlePostImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNY394r0dZXVMYO_UXvNx4cF5SJVQAY_t5Hg&s" alt="tulips" />
                    <h1 className="singlePostTitle">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        <div className="singlePostEdit">
                            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                            <i className="singlePostIcon fa-solid fa-trash-can"></i>
                        </div>
                    </h1>
                    <div className="singlePostInfo">
                        <span className="singlePostAuthor">Author: <b>Akshita M B</b></span>
                        <span className="singlePostDate">1 hour ago</span>
                    </div>
                    <p className="singlePostDescription">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt repellendus voluptate nulla? Blanditiis enim tempore dolorem, at, quaerat laborum qui pariatur, voluptates doloremque officia quibusdam animi soluta optio ipsam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quam voluptate id numquam aliquam adipisci tempore architecto doloribus recusandae, atque iure accusantium dolorum. Laboriosam reprehenderit quasi incidunt fuga obcaecati quisquam!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos non similique, magni voluptatum fuga provident culpa molestiae quaerat accusamus tempore modi eveniet quibusdam placeat quidem, mollitia soluta vitae atque 
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus impedit incidunt voluptas corporis expedita dolores eum veniam. At debitis iure omnis ea consequuntur, dolore voluptatum aut libero unde obcaecati labore amet. Consequuntur officia excepturi placeat ipsum iusto accusantium fuga! Commodi eos adipisci omnis corporis neque, esse sapiente? Earum nulla dolorum reprehenderit non, eum natus, ex magnam esse blanditiis nisi adipisci doloremque nam nihil perspiciatis officia harum similique? Ratione nostrum distinctio, a officia eligendi necessitatibus veritatis quasi delectus animi non commodi, eius libero consectetur. Neque, reiciendis dignissimos nostrum rem beatae, quos quaerat fuga esse ut veritatis corrupti voluptatum odit, quibusdam quidem.
                    </p>
                </div>
            </div>
        </div>
    )
}