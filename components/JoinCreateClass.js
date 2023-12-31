import React from 'react'
import '../styles/home.css'
import '../styles/form.css'
import '../styles/create-class.css'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import GroupsIcon from '@mui/icons-material/Groups';
import JoinClassForm from './JoinClassForm';

function JoinCreateClass({  setJoinCreateBttn, setJoinModal, setJoinModalContent, setCreateModal }) {

    const handleClick = () => {
        setJoinCreateBttn(false)
    }

    const handleCreateClass = () => {
        setCreateModal(true)
    }

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
        </>
    )
}

export default JoinCreateClass