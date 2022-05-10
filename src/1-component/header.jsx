// tạo 1 component với class component chưa tiêu đề cyberlearn.vn
import React from "react";
class Header extends React.Component {
    render () {
        return (
            <div className="p-4 bg-secondary">
                <h1 className="text-white">Cyberlearn.vn</h1>
            </div>
        );
    }
}
export default Header ;