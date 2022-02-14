import React from 'react';
import "./Chat.css";
import {Avatar, IconButton} from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

function Chat() {
  return (
      <div className="chat">
        <div className="chat__header">
          <Avatar/>
          <div className="chat__headerInfo">
            <h3>Room name</h3>
            <p>Last seen at ...</p>
          </div>
          <div className="chat__headerRight">
            <IconButton>
              <SearchIcon/>
            </IconButton>
            <IconButton>
              <AttachFileIcon/>
            </IconButton>
            <IconButton>
              <MoreVertIcon/>
            </IconButton>
          </div>
        </div>

        <div className="chat__body">
          <p className='chat__message'>
          <span className='chat__name'>Siri</span>
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p>
          <p className='chat__receiver chat__message'>
          <span className='chat__name'>Siri</span>
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p>
        </div>
        <div className="chat__footer">
          <InsertEmoticonIcon/>
          <form>
            <input type="text" placeholder='Type a message'/>
            <button type='submit'>Send a message</button>
          </form>
          <MicIcon/>
        </div>
      </div>
    
  )
}

export default Chat