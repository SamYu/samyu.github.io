import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    scene: {
        perspective: '4000px',
    },
    cube: {
        position: 'relative',
        transformStyle: 'preserve-3d',
        transform: 'translateZ(-100px)',
        transition: 'all 1s',
        width: '100%',
        height: '100vh',
       '-webkit-transform-origin': 'center bottom',
    },
    cubeFace: {
        position: 'absolute',
        backgroundColor: 'white',
        width: '100%',
        height: '100vh',
    },
}

class CubeTest extends React.Component {
    constructor() {
        super()
        this.state = {
            rotationCount: 0,
        }
    }

    rotateCube() {
        this.setState({
            rotationCount: this.state.rotationCount + 1,
        })
    }

    render() {
        const classes = this.props.classes;
        const elements = this.props.children;
        const prevRotate = (this.state.rotationCount - 1) * 90;
        const rotationDeg = this.state.rotationCount * 90;
        const nextRotate = (this.state.rotationCount + 1) * 90;
        return (
            <Fragment>
            <div className={classes.scene}>
                <div
                    className={classes.cube}
                    style={{
                        transform: `translateZ(-100px)  rotateX(${rotationDeg}deg)`
                    }}
                >
                    <div 
                        className={classes.cubeFace} 
                        style={{
                            transform: `translateZ(100px) rotateX(-${prevRotate}deg)`,
                        }}
                    >
                        {elements[this.state.rotationCount - 1]}
                    </div>
                    <div 
                        className={classes.cubeFace}
                        style={{
                            transform: `translateZ(100px) rotateX(-${rotationDeg}deg)`,
                        }}
                    >
                        {elements[this.state.rotationCount]}
                    </div>
                    <div 
                        className={classes.cubeFace} 
                        style={{
                            transform: `translateZ(100px) rotateX(-${nextRotate}deg)`, 
                            opacity: 0
                        }}
                    >
                        {elements[this.state.rotationCount + 1]}
                    </div>
                </div>
            </div>
            <button style={{position: 'absolute', top: 0, right: 0, }}onClick={() => this.rotateCube()}>
                CLICK ME
            </button>
            </Fragment>
        )
    }
}

export default withStyles(styles)(CubeTest);
