import React, { useEffect } from 'react';
import request from "../../utils/request";
import 'bootstrap/dist/css/bootstrap.css';
import selectors from './selectors';
import { connect } from 'react-redux';
import Button from '../../components/Button'
import { color } from '../../styles/color'

import LoginAccess from '../Login/index.js'


 class UserData extends React.Component{
    constructor(props){
        super(props);
    }
    
    

    render(){
        const { user } = this.props
        return (
        <LoginAccess >
            <div className='container'>
                    <div className='row'>
                        <div className='col-md-6' style={{margin: 'auto', marginTop: '50px'}}>
                            <table className='table table-hover'>
                                <tbody>
                                        {Object.keys(user)
                                        .map(name => { return(
                                        <tr>
                                            <th scope="row"></th>
                                            <td>{name}</td>
                                            <td>{user[name]}</td>
                                        </tr>);
                                        })} 
                                </tbody>
                                
                            </table>
                        </div>
                        <div className='col-md-2'>
                            <Button
                            style={{
                                backgroundColor: color.darkBlue,
                                width: '150px',
                                height: '150px',
                                alignSelf: 'flex-end',
                                fontFamily: 'Salsa',
                                position: 'absolute',
                                borderRadius: '75px',
                                right: '10%',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            placeholder='Edit profile'
                            onClick={this.openEditUserProfile}
                            />
                            
                        </div>
                    </div>
            </div>
            </LoginAccess>
        );
    }
}

export default connect(selectors)(UserData);
