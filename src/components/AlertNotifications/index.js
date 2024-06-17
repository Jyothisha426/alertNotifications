import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => {
  const renderSuccessNotification = () => (
    <Notification>
      <div className="icon-msg-container">
        <AiFillCheckCircle className="icon success" />
        <div className="msg-container">
          <h1 className="msg-head success">Success</h1>
          <p className="para">You can access all the files in the folder</p>
        </div>
      </div>
    </Notification>
  )

  const renderErrorNotification = () => (
    <Notification>
      <div className="icon-msg-container">
        <RiErrorWarningFill className="icon error" />
        <div className="msg-container">
          <h1 className="msg-head error">Error</h1>
          <p className="para">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </div>
    </Notification>
  )

  const renderWarningNotification = () => (
    <Notification>
      <div className="icon-msg-container">
        <MdWarning className="icon warning" />
        <div className="msg-container">
          <h1 className="msg-head warning">Warning</h1>
          <p className="para">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </div>
    </Notification>
  )

  const renderInfoNotification = () => (
    <Notification>
      <div className="icon-msg-container">
        <MdInfo className="icon info" />
        <div className="msg-container">
          <h1 className="msg-head info">Info</h1>
          <p className="para">Anyone on the internet can view these files</p>
        </div>
      </div>
    </Notification>
  )

  return (
    <div className="app-container">
      <h1 className="main-heading">Alert Notifications</h1>
      {renderSuccessNotification()}
      {renderErrorNotification()}
      {renderWarningNotification()}
      {renderInfoNotification()}
    </div>
  )
}

export default AlertNotifications
