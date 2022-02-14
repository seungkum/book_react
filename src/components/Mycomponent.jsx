import React from 'react';

const Mycomponent = ({name , children}) => {
    return (
        <div>
            안녕하세용, 제이름은 {name} 입니다. <br/>
            children 값은 {children} 입니다.
        </div>
    );
};

Mycomponent.defaultProps ={
    name:'기본이름',
    children:'기본이름'
}

export default Mycomponent;