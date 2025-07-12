import { useState } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import TerminalIcon from '@mui/icons-material/Terminal'
import ArticleIcon from '@mui/icons-material/Article'
import Button from '@mui/material/Button'
import CancelIcon from '@mui/icons-material/Cancel'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import { SplitButton } from '../../Components/DropDownButton/'
import CodeOffIcon from '@mui/icons-material/CodeOff'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import DeviceHubIcon from '@mui/icons-material/DeviceHub'
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline'
import ViewComfyIcon from '@mui/icons-material/ViewComfy'
import { textDes, contactCreationCode, constructorArgument, deployedByteCode, swarmSource } from '../../utils/constants'


const Contract = () => {
    const [abi, setAbi] = useState(localStorage.getItem('abi') || textDes)
    const [contact, setContact] = useState(localStorage.getItem('contact') || contactCreationCode)
    const [constructor, setConstructor] = useState(localStorage.getItem('constructor') || constructorArgument)
    const [deployed, setDeployed] = useState(localStorage.getItem('deployed') || deployedByteCode)
    const [swarm, setSwarm] = useState(localStorage.getItem('swarm') || swarmSource)
    const [isFullScreen, setIsFullScreen] = useState(false)

    const setABIInput = (e) => {
        let value = e.target.value
        setAbi(value)
        localStorage.setItem('abi', v)
    }

    const setContactInput = (e) => {
        let v = e.target.value
        setContact(v)
        localStorage.setItem('contact', v)
    }

    const setConstructorInput = (e) => {
        let v = e.target.value
        setConstructor(v)
        localStorage.setItem('constructor', v)
    }

    const setDeployedInput = (e) => {
        let v = e.target.value
        setDeployed(v)
        localStorage.setItem('deployed', v)
    }

    const setSwarmInput = (e) => {
        let v = e.target.value
        setSwarm(v)
        localStorage.setItem('swarm', v)
    }


    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen)
    }


    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('Text copied to clipboard!')
            })
            .catch(err => {
                console.error('Failed to copy text: ', err)
                alert('Failed to copy text')
            })
    }


    return (
        <div>
            <div className='margin_top'>
                <h4 className='h4'>
                    <CheckCircleIcon className='check_icon' />
                    Contract Source Code Verified <span>(Exact Match)</span>
                </h4>
            </div>
            <div className='top_panel'>
                <div className='font_weight margin_top'>
                    <p label="Contract Name"><b>MasterChief</b></p>
                    <p label="Optimization Enabled"><b>N with 200 runs</b></p>
                </div>
            </div>
            <div className='border_bottom'>
                <div className='font_weight margin_top'>
                    <p label="Compiler Version"><b>v0.7.6+commit.7338295f</b></p>
                    <p label="Other Settings"><b>default evmVersion, None</b> <span className='purple'></span></p>
                </div>
            </div>
            <div>
                <h4 className='h4'>
                    <TerminalIcon className='terminal_icon' />
                    Contract Source Code <span className='grey_color'>(Solidity)</span>
                </h4>
            </div>
            <div className='margin_top'>
                <h4 className='h4'>
                    <ArticleIcon className='terminal_icon' />
                    Contract Security Audit
                </h4>
                <ul>
                    <li><span className='contract_area'><CancelIcon className='cancle_icon' />No Contract Security Audit Submitted</span> <Button variant="text" className='submit_audit text_transform'>- Submit Audit Here</Button> </li>
                </ul>
            </div>
            <div className='margin_top'>
                <div className='contract_abi'>
                    <h4 className='h4'>
                        <FormatListBulletedIcon className='terminal_icon' />
                        Contract ABI
                    </h4>
                    <div className='text_area_panel'>
                        <SplitButton />
                        <Button variant='text' className='grey_color_bg icons_abi' onClick={() => copyToClipboard(abi)}><ContentCopyIcon /></Button>
                        <Button variant='text' className='grey_color_bg icons_abi' onClick={toggleFullScreen}><FullscreenIcon /></Button>
                    </div>
                </div>
                <div>
                    <TextareaAutosize
                        className='text_area'
                        value={abi}
                        onChange={setABIInput}
                        aria-label='maximum height'
                    />
                </div>
            </div>
            <div className='margin_top'>
                <div className='contract_abi'>
                    <h4 className='h4'>
                        <CodeOffIcon className='terminal_icon' />
                        Contract Creation Code
                    </h4>
                    <div className='text_area_panel'>
                        <Button variant='text' className='code_area text_transform font_size'>Decompile ByteCode<OpenInNewIcon /></Button>
                        <Button variant='text' className='code_area text_transform font_size'>Switch To Opcodes View</Button>
                    </div>
                </div>
                <div>
                    <TextareaAutosize
                        className='text_area'
                        value={contact}
                        onChange={setContactInput}
                        aria-label='maximum height'
                    />
                </div>
            </div>
            <div className='margin_top'>
                <div className='contract_abi'>
                    <h4 className='h4'>
                        <DeviceHubIcon className='terminal_icon' />
                        Constructor Arguments <span className='grey_color'>(ABI-Encoded and is the last bytes of the Contract Creation Code above)</span>
                    </h4>
                    <div>
                        <TextareaAutosize 
                            className='text_area'
                            value={constructor}
                            onChange={setConstructorInput}
                            aria-label='maximum height'
                        />
                    </div>
                </div>
            </div>
            <div className='margin_top'>
                <div className='contract_abi'>
                    <h4 className='h4'>
                        <ViewTimelineIcon className='terminal_icon' />
                        Deployed ByteCode SourceMap
                    </h4>
                    <div>
                        <TextareaAutosize 
                            className='text_area'
                            value={deployed}
                            onChange={setDeployedInput}
                            aria-label='maximum height'
                        />
                    </div>
                </div>
            </div>
            <div className='margin_top'>
                <div className='contract_abi'>
                    <h4 className='h4'>
                        <ViewComfyIcon className='terminal_icon' />
                        Swarm Source 
                    </h4>
                    <div>
                        <TextareaAutosize 
                            className='text_area'
                            value={swarm}
                            onChange={setSwarmInput}
                            aria-label='maximum height'
                        />
                    </div>
                </div>
            </div>
        </div>
    )



}


export default Contract