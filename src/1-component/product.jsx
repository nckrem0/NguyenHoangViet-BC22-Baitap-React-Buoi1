// tạo 1 function component với react function component với nội dung chứa card bootstrap
function Product() {
    return (
        <div className="card">
            <img src="https://picsum.photos/200/300" alt="photo" className="card-img" height="300px"/>
            <div className="card-body">
                <h3 className="card-titile">Cyber Soft</h3>
            </div>
        </div>
    )
}
export default Product ;