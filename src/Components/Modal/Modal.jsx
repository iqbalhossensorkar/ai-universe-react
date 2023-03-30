import React, { useState } from 'react';

const Modal = (props) => {
    const { id, description, image_link, features, integrations, pricing, input_output_examples, accuracy } = props.singleData;
    console.log(input_output_examples[0]);
    // const {modalVisible, handleModalClose, examples} = props
    // const {example} = props
    // console.log(example);
    return (
        <div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal h-full">
                <div className="modal-box w-11/12 max-w-4xl lg:flex items-center gap-3 justify-center">
                    <div className="card w-full bg-base-100 h-[511px]">
                        <div className="card-body text-left p-5 bg-red-300 rounded-xl bg-opacity-5 border-2 border-red-300">
                            <p className='font-bold text-2xl'>{description ? description : ""}</p>
                            <div className='flex justify-between items-center gap-4 mb-6'>
                                <div className='text-center p-3 w-32 h-24 bg-white rounded-xl text-base font-bold text-success'>
                                    <p>{pricing[0] ? pricing[0].price : "Free of Cost"}</p>
                                    <p>{pricing[0] ? pricing[0].plan : "Free of Cost"}</p>
                                </div>
                                <div className='text-center p-3 w-32 h-24 bg-white rounded-xl text-base font-bold text-accent'>
                                    <p>{pricing[1] ? pricing[1].price : "Free of Cost"}</p>
                                    <p>{pricing[1] ? pricing[1].plan : "Free of Cost"}</p>
                                </div>
                                <div className='text-center p-3 w-32 h-24 bg-white rounded-xl text-base font-bold text-error'>
                                    <p>{pricing[2] ? pricing[1].price : "Free of Cost"}</p>
                                    <p>{pricing[2] ? pricing[2].plan : "Free of Cost"}</p>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    <p className='text-left text-lg font-bold'>Features</p>
                                    {
                                        Object.values(features || {}).map((feature, index) =><div key={index}> <p>. {feature.feature_name}</p></div>)
                                    }
                                </div>
                                <div>
                                    <p className='text-lg text-left font-bold'>Integrations</p>
                                    {integrations &&
                                        integrations?.map((int, index) => <div key={index}> <p>. {int ? int : "No data Found"}</p></div>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 border-2 border-[#d6d6d6] h-[511px]">
                        <figure className="px-5 pt-5">
                            <img src={image_link ? image_link[0] : null} alt="..." className="rounded-xl h-60 w-full" />
                        </figure>
                        {accuracy.score &&
                            <p className='badge badge-error rounded-md absolute top-6 right-6 text-base p-4 font-bold'>{accuracy.score !== null ? Math.round(accuracy.score * 100) : ""}% accuracy</p>}
                        <div className="card-body items-center text-center">
                            <p  className="text-2xl font-bold">{input_output_examples[0]? input_output_examples[0].input: ''}</p>
                            <p>{input_output_examples[0]? input_output_examples[0].output: ''}</p>
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn btn-error btn-md btn-circle absolute right-0 top-0">✕</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
