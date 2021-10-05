import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const UpdateLens = (props) => {
    const { lens } = props
    let [product, setProduct] = useState({
        "pName": lens.pName,
        "pDesc": lens.pDesc,
        "pPrice": lens.pPrice,
        "pRating": lens.pRating,
        "pImage": lens.pImage,
        "id": lens._id,
        "config": {
            "headers": {
                "authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }
    })
    const changeHandler = (e) => {
        var { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        })
    }

    const fileHandler = (e) => {
        var { name, files } = e.target;
        setProduct({
            ...product,
            [name]: files[0]
        })

    }

    const UpdateLens = (e) => {

        e.preventDefault();
        var fData = new FormData();
        fData.append("pName", product.pName)
        fData.append("pDesc", product.pDesc)
        fData.append("pRating", product.pRating)
        fData.append("pPrice", product.pPrice)
        fData.append("pImage", product.pImage)
        fData.append("id", product.id)
        console.log(product)
        axios.put("http://localhost:90/product/update", fData, product.config)
            .then((response) => {
                console.log(response)
                if (response.data.success == true) {
                    swal({
                        title: "Success",
                        text: response.data.message,
                        icon: "success"
                    })
                    window.location.reload();
                }
                else {
                    swal({
                        title: "Error",
                        text: response.data.message,
                        icon: "error"
                    })
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <React.Fragment>
            <div class="modal fade" id={`product${lens._id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Update</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>


                        <div class="modal-body">
                            <form method="post" onSubmit={UpdateLens}>
                                <div className="form-group">
                                    <label> Bus Name </label>
                                    <input type="text" className="form-control" name="pName" value={product['pName']} onChange={(event) => { changeHandler(event) }} required />
                                </div>
                                <div className="form-group">
                                    <label> Bus Route </label>
                                    <input type="text" className="form-control" name="pPrice" value={product['pPrice']} onChange={(event) => { changeHandler(event) }} required />
                                </div>
                                <div className="form-group">
                                    <label> Initial Stop </label>
                                    <input type="text" className="form-control" name="pRating" value={product['pRating']} onChange={(event) => { changeHandler(event) }} required />
                                </div>
                                <div className="form-group">
                                    <label> Bus Image </label>
                                    <input type="file" accept="image/*" className="form-control-file" name="pImage" onChange={(event) => { fileHandler(event) }} required />
                                </div>
                                <div className="form-group">
                                    <label> Bus Description </label>
                                    <textarea className="form-control" name="pDesc" value={product['pDesc']} onChange={(event) => { changeHandler(event) }} required></textarea>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-primary w-50 btn-lg" name="add_product" type="submit"> Add Bus </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default UpdateLens