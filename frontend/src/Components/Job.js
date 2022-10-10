import React from 'react'

export const Job = () => {
    const onSearch = async (e) => {
    }
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-header">
                                <h3>Find your desired job</h3>
                            </div>
                            <div className="job-search-form bg-cyan job-featured-search">
                                <form>
                                    <div className="row justify-content-center">
                                        <div className="col-lg-5 col-md-5 col-xs-12">
                                            <div className="form-group">
                                                <input className="form-control" type="text" placeholder="Position" />
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-5 col-xs-12">
                                            <div className="form-group">
                                                <input className="form-control" type="text" placeholder="Location" />
                                                <i className="lni-map-marker" />
                                            </div>
                                        </div>
                                        <div className="col-lg-1 col-md-1 col-xs-12">
                                            <button type="button" onClick={onSearch} className="button"><i className="lni-search" /></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id="featured" className="section bg-cyan">
                <div className="container">
                    <div className="row">

                    </div>
                </div>
            </section>

        </>
    );
}
