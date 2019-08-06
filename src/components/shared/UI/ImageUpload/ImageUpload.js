import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import './ImageUpload.css';
import DeleteIcon from '../../../components/Icons/DeleteIcon/DeleteIcon';

class ImageUpload extends Component {

    state = {
        showRejection: false,
        rejectionDescription: '',
        maxSize: 5000000
    };

    onDrop = (acceptedFiles, rejectedFiles) => {

        if(rejectedFiles.length === 0) {
            this.props.onSubmit(acceptedFiles[0]);
            this.setState({showRejection: false, rejectionDescription: ''});
            console.log(this.props.image);
            return;
        }

        if(rejectedFiles.length > 0 && rejectedFiles[0].size > this.state.maxSize){
            this.setState({showRejection: true, rejectionDescription: 'Filen er for stor'})
            return;
        }

        if(rejectedFiles.length > 0 && (rejectedFiles[0].type !== 'image/png' || rejectedFiles[0].type !== 'image/jpeg')){
            this.setState({showRejection: true, rejectionDescription: 'Filen er forkert format'});
            return;
        }
    };

    deleteImage = () => {
        this.props.onDelete();
        this.setState({showRejection: false, rejectionDescription: ''})
    };

    render() {
        let disabled = false;
        if(this.props.image){
            disabled = true;
        }

        let classNames = ["DropZone"];
        if(!this.props.image){
            classNames.push("Hover");
        }
        const concatenatedClassNames = classNames.join(" ");

        return (
            <div className={"ImageUpload"} style={this.props.style}>
                <Dropzone
                    accept={"image/png, image/jpeg"}
                    minSize={0}
                    maxSize={this.state.maxSize}
                    disabled={disabled}
                    onDrop={(acceptedFiles, rejectedFiles, event) => {this.onDrop(acceptedFiles, rejectedFiles, event)}}>
                    {({getRootProps, getInputProps, isDragActive}) => (
                        <div {...getRootProps()} className={concatenatedClassNames}>
                            <input {...getInputProps()} />
                            {!isDragActive && this.props.image === null ? 'Tilføj billede (valgfrit)' : null}
                            {isDragActive && this.props.image === null ? "Drop it like it's hot!" : null}
                            {this.props.image !== null ? <p className={"PictureDescription"}>{this.props.image.name}</p> : null}
                            {this.state.showRejection ? <p style={{color:'red'}}>{this.state.rejectionDescription}</p>: null}
                        </div>
                    )}
                </Dropzone>
                <div>
                    {this.props.image !== null ? <DeleteIcon clicked={this.deleteImage}/>: null}
                </div>
            </div>
        )
    }
}
export default ImageUpload;

