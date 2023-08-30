'use client';

import React, { useState, useEffect, useRef  } from 'react'
import '../styles/home.css'
import '../styles/form.css'
import '../styles/create-class.css'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import GroupsIcon from '@mui/icons-material/Groups';
import JoinClassForm from './JoinClassForm';

function JoinCreateClass({  setJoinCreateBttn, setJoinModal, setJoinModalContent, setCreateModal }) {

    // const [createModalOpen, setCreateModal] = useState(false);
    // const [codeModalOpen, setCodeModal] = useState(false);
    // const [showOverlay, setShowOverlay] = useState(false);

    // const textRef = useRef(null);

    // const handleCopy = () => {
    //     setShowOverlay(true);
    // };

    // useEffect(() => {
    //     if (showOverlay) {
    //       const timeout = setTimeout(() => {
    //         setShowOverlay(false);
    //       }, 2000);
    
    //       return () => {
    //         clearTimeout(timeout);
    //       };
    //     }
    //   }, [showOverlay]);

    const handleClick = () => {
        setJoinCreateBttn(false)
    }

    // const handleCodeChange = (e) => {
    //     setCodeValue(e.target.value)
    //     setIsButtonEnabled(e.target.value !== '')
    // }

    // const handleJoinClass = () => {
    //     if(codeValue === '123'){
    //         console.log('success')
    //         setJoinModal(true);
    //         setJoinModalContent("Class has been joined successfully.")
    //         setCodeValue('');
    //     } else {
    //         console.log('error')
    //         setJoinModal(true);
    //         setJoinModalContent("Couldn't join this class with that code. Double-check the code or try another one.")
    //     }
    // }

    // const handleCreateCloseModal = () => {
    //     setCreateModal(false);
    // }

    // const handleCodeCloseModal = () => {
    //     setCodeModal(false);
    // }

    const handleCreateClass = () => {
        setCreateModal(true)
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     handleCreateCloseModal()
    //     setCodeModal(true)
    //     console.log(formData);
    //     setFormData({className: '', classDesc: ''})
    // }

    // const [formData, setFormData] = useState({
    //     className: '',
    //     classDesc: ''
    // });

    // const { className, classDesc } = formData;

    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // }

    // const copyText = () => {
    //     if (textRef.current) {
    //         const text = textRef.current.innerText;
    //         navigator.clipboard.writeText(text);
    //     }
    // }

    // const customStyles = {
    //     overlay: {
    //       backgroundColor: 'rgba(0, 0, 0, 0.5)',
    //       display: 'flex',
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //     },
    //     content: {
    //         background: '#fff',
    //         padding: '2rem',
    //         borderRadius: '4px',
    //         width: 'fit-content',
    //         margin: 'auto',
    //         height: 'fit-content', 
    //       },
    //   };

    return (
        <>
            <div className='x-axis'>
                <div className='container'>
                    <button className='bg heading' style={{color: 'black', fontSize: '10px'}} onClick={handleClick}>{"< "}Back</button>
                    <h1 className='bg heading' style={{marginTop: '110px'}}>Join or create class</h1>
                </div>
            </div>
            <div className='bg box x-axis boundary' style={{marginTop: '140px'}}>
                <div className="square-box">
                    <div className="nested-box">
                    <p className='nested-box-content'>
                        <GroupsIcon style={{height: '30px', width: '30px'}}/>
                    </p>
                    </div>
                    <h2>Create a class</h2>
                    <button 
                        onClick={handleCreateClass}
                        className='bttn' 
                        style={{width: '120px', fontSize: '12px', 
                            height: '30px', marginTop: '17.5px'}}
                        >
                            <GroupAddIcon style={{height: '16px', width: '16px', marginRight: '7.5px'}}/>
                            Create class
                    </button>
                </div>
                <div className="square-box">
                    <div className="nested-box" style={{height: '50px', width: '50px'}}>
                    <p className='nested-box-content'>
                        <GroupsIcon style={{height: '25px', width: '25px'}}/>
                    </p>
                    </div>
                    <h2 style={{fontSize: '14px'}}>Join a class with a code</h2>
                    <JoinClassForm setJoinModal={setJoinModal} setJoinModalContent={setJoinModalContent}/>
                </div>
            </div>
            {/* <Modal
                ariaHideApp={false}
                isOpen={createModalOpen}
                onRequestClose={handleCreateCloseModal}
                style={customStyles}
            >
                <h2 style={{fontWeight: 'bold', marginBottom: '25px'}}>Create your class</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        autoFocus
                        required 
                        className='input' 
                        placeholder='Class name'
                        value={className}
                        onChange={handleChange}
                        name="className"
                    />
                    <textarea 
                        rows='4'
                        required 
                        className='input' 
                        placeholder='Description'
                        value={classDesc}
                        onChange={handleChange}
                        name="classDesc"
                    />
                    <button 
                        type='submit'
                        className='bttn' 
                        style={{width: '75px', fontSize: '14px', 
                                height: '35px', marginTop: '10px'}}
                        >
                            Ok
                    </button>
                </form>
            </Modal> */}
            {/* <Modal
                ariaHideApp={false}
                isOpen={codeModalOpen}
                onRequestClose={handleCodeCloseModal}
                style={customStyles}
            >
                <p style={{color: 'black'}}>
                    Your class has been successfully created.<br/>
                    To invite students to join this class, please share the following code with them:<br/>
                    <div className='contain' onClick={handleCopy}>
                        Class Code: <a ref={textRef} onClick={copyText} className='code-link'>#123abc</a><br/>
                        {
                            showOverlay && 
                                <div className="overlay">
                                    Copied
                                </div>}
                    </div>
                    Students can use this code to join your class.
                </p>
                <button 
                    className='bttn' 
                    onClick={handleCodeCloseModal} 
                    style={{width: '75px', fontSize: '14px', 
                            height: '35px', marginTop: '10px'}}
                    >
                        Ok
                </button>
            </Modal> */}
        </>
    )
}

export default JoinCreateClass