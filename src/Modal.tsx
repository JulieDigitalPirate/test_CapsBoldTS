import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ visible, toggle }: {visible: boolean, toggle: () => void}) => visible ? ReactDOM.createPortal(
  <div className="modal">
    <div className="modal-pop" role="dialog" aria-modal="true">
      <h3>Вы уверены?</h3>
      <p>Пожалуйста, убедитесь, что вы действительно хотите совершить это действие. Эти изменения необратимы.</p>
      <button style={{marginLeft:"100px" , color:'#f9f8fa', background: 'linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%)', backgroundOrigin: 'border-box', border: '3px solid transparent', borderRadius: '18px', cursor: 'pointer',width: '100px',height: '30px'}} type="button" onClick={toggle}>Ok!</button>
      <button style={{marginLeft:"50px" , color:'#f9f8fa', background: 'linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%)', backgroundOrigin: 'border-box', border: '3px solid transparent', borderRadius: '18px', cursor: 'pointer',width: '100px',height: '30px'}} type="button" onClick={toggle}>Closed!</button>
    </div>  
    <div className="modal-overlay"></div>    
  </div>, document.body
) : null;

export default Modal;