import styled from 'styled-components'

const CardWrapper = styled.div`
    width: 100%;
    margin-top: 50px;
    height: 620px;
    width: 875px;
    background-attachment: fixed;
    background-image: url('https://www.weblink.com.br/blog/wp-content/uploads/2018/06/o-que-e-php-1.png');
    background-size: cover;
    transition: background .3s,border .3s,border-radius .3s,box-shadow .3s;
    margin-bottom: 50px;
    border-radius: 20px;
    box-shadow: 0px 6px 15px 0px rgba(0,0,0,.2);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    .card-content {
        z-index: 10000000000;
        height: fit-content;
        display: flex;
        flex-direction: column;
        padding-right:120px;
        padding-left:120px;
    }
    .overlay-image {
        background-color: #4a63e7;
        opacity: .9;
        transition: background .3s,border-radius .3s,opacity .3s;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
    }

    .main-text {
        margin-top: 0;
        margin-bottom: 1rem;
        color: white;
        color: #fff;
        font-family: "Open Sans",Sans-serif;
        font-size: 16px;
        line-height: 1.8em;
    }

`

export {
    CardWrapper
}