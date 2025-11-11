import React from 'react'
import CounterUp from '../../lib/CounterUp';
import FunfactImage from '../../assets/images/shape/funface-four-shape.png';

function Funfact() {
    return (
        <>
        <section className="funfact-section-four">
            <div className="container">
                <div className="row g-5 align-items-center">
                <div className="col-xl-4">
                    <div className="sec-title">
                    <h2 className="title wow splt-txt" data-splitting>We Help real
                        People do more
                        Business Plan</h2>
                    </div>
                </div>
                <div className="col-xl-8">
                    <div className="row g-4">
                    <div className="col-sm-4">
                        <div className="funfact-block-four border-0">
                        <img src={FunfactImage} alt="Image"/>
                        <h2 className="title"><CounterUp end={90} />%</h2>
                        <h5 className="sub-title">Clients Satisfactions</h5>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="funfact-block-four">
                        <img src={FunfactImage} alt="Image"/>
                        <h2 className="title"><CounterUp end={40} />%</h2>
                        <h5 className="sub-title">Decrease Expense</h5>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="funfact-block-four">
                        <img src={FunfactImage} alt="Image"/>
                        <h2 className="title"><CounterUp end={7} />M</h2>
                        <h5 className="sub-title">Money Flow Users</h5>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Funfact
