import ArticleIcon from '@mui/icons-material/Article'
import CancelIcon from '@mui/icons-material/Cancel'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CodeOffIcon from '@mui/icons-material/CodeOff'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import DeviceHubIcon from '@mui/icons-material/DeviceHub'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import TerminalIcon from '@mui/icons-material/Terminal'
import ViewComfyIcon from '@mui/icons-material/ViewComfy'
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import { useState } from 'react'
import DropDownBtn from '../../Components/DropDownButton/DropDownBtn'
import { constructorArgument, contactCreationCode, deployedByteCode, swarmSource, textDes } from '../../Utils/constants'

const Contract = (props) => {
    const [abi, setABI] = useState(localStorage.getItem('abi') || textDes)
    const [contact, setContact] = useState(localStorage.getItem('contact') || contactCreationCode)
    const [constructor, setConstructor] = useState(localStorage.getItem('constructor') || constructorArgument)
    const [deployed, setDeployed] = useState(localStorage.getItem('deployed') || deployedByteCode)
    const [swarm, setSwarm] = useState(localStorage.getItem('swarm') || swarmSource)
    const [editor, setEditor] = useState(localStorage.getItem('editor') || '// Write Your Code here !')

    const setABIInput = (e) => {
        let v = e.target.value
        setABI(v)
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
        localStorage.setItem('constructor', v)
    }

    const setSwarmInput = (e) => {
        let v = e.target.value
        setSwarm(v)
        localStorage.setItem('constructor', v)
    }

    const handleEditorChange = (value, event) => {
        setEditorInput(value)
        localStorage.setItem('constructor', value)
    }

    return (
        <div>
            <div className='margin_top'>
                <h4 className='h4'>
                    <CheckCircleIcon className='check_icon' />
                    Contract Source Code Verified <span className='grey_color'>(Exact Match)</span>
                </h4>
            </div>
            <div className='top_panel'>
                <Typography className='font_weight margin_top'>
                    <Typography label="Contract Name">MasterChef</Typography>
                    <Typography label="Optimization Enabled">No with 200 runs</Typography>
                </Typography>
            </div>
            <div className='border_top'>
                <Typography className='font_weight margin_top'>
                    <Typography label="Compiler Version">v0.7.6+commit.7338295f</Typography>
                    <Typography label="Other Settings">default evmVersion, None <span className='purple'> license</span></Typography>
                </Typography>
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
                    <li><span className='contract_area' style={{}}><CancelIcon className='cancel_icon' />No Contract Security Audit Submitted</span> <Button variant="text" className='submit_audit text_transform'>- Submit Audit Here</Button> </li>
                </ul>
            </div>
            <div className='margin_top'>
                <div className='contract_abi'>
                    <h4 className='h4'>
                        <FormatListBulletedIcon className='terminal_icon' />
                        Contract ABI
                    </h4>
                    <div className='text_area_panel'>
                        <DropDownBtn />
                        <Button variant="text" className='grey_color_bg icons_abi' ><ContentCopyIcon /></Button>
                        <Button variant="text" className='grey_color_bg icons_abi' ><FullscreenIcon /></Button>
                    </div>
                </div>
                <div>
                    <TextareaAutosize
                        className='text_area'
                        aria-label="maximum height"
                        // placeholder="Maximum 4 rows"
                        // defaultValue={textDes}
                        value={abi}
                        onChange={setABIInput}

                    />
                </div>
            </div >
            <div className='margin_top'>
                <div className='contract_abi'>
                    <h4 className='h4'>
                        <CodeOffIcon className='terminal_icon' />
                        Contract Creation Code
                    </h4>
                    <div className='text_area_panel'>
                        <Button variant="text" className='code_area text_transform font_size' >Decompile ByteCode <OpenInNewIcon /></Button>
                        <Button variant="text" className='code_area text_transform font_size' >Switch to Opcodes View</Button>
                    </div>
                </div>
                <div>
                    <TextareaAutosize
                        className='text_area'
                        aria-label="maximum height"
                        // placeholder="Maximum 4 rows"
                        // defaultValue={contactCreationCode}
                        value={contact}
                        onChange={setContactInput}

                    />
                </div>
            </div >
            <div className='margin_top'>
                <div className='contract_abi'>
                    <h4 className='h4'>
                        <DeviceHubIcon className='terminal_icon' />
                        Contructor Arguments <span className='grey_color'>(ABI-Encoded and is the last bytes of the Contract Creation Code above )</span>
                    </h4>
                </div>
                <div>
                    <TextareaAutosize
                        className='text_area'
                        aria-label="maximum height"
                        // placeholder="Maximum 4 rows"
                        // defaultValue={constructorArgument}
                        value={constructor}
                        onChange={setConstructorInput}
                    />
                </div>
            </div >
            <div className='margin_top'>
                <div className='contract_abi'>
                    <h4 className='h4'>
                        <ViewTimelineIcon className='terminal_icon' />
                        Deployed Byte Code Sourcemap
                    </h4>
                </div>
                <div>
                    <TextareaAutosize
                        className='text_area'
                        aria-label="maximum height"
                        // placeholder="Maximum 4 rows"
                        // defaultValue={deployedByteCode}
                        value={deployed}
                        onChange={setDeployedInput}
                    />
                </div>
            </div >
            <div className='margin_top'>
                <div className='contract_abi'>
                    <h4 className='h4'>
                        <ViewComfyIcon className='terminal_icon' />
                        Swarn Source
                    </h4>
                </div>
                <div>
                    <TextareaAutosize
                        className='text_area'
                        aria-label="maximum height"
                        // placeholder="Maximum 4 rows"
                        // defaultValue={swarmSource}
                        value={swarm}
                        onChange={setSwarmInput}

                    />
                </div>
            </div >
        </div >
    )
}

export default Contract;