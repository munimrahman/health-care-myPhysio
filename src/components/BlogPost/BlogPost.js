import React from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const BlogPost = () => {
    return (
        <div>
            <div className="text-white section-header bg-linear text-center mb-5">
                <h1 className="fw-bold pt-5 font-size-custom">Post Name</h1>
                <h6 className="pb-5">Home &gt; Blogs &gt; Post Name</h6>
            </div>
            <div className="row container mx-auto service-details">
                <div className="row col-12 col-md-9">
                    <img src="https://demos.qreativethemes.com/physio/wp-content/uploads/sites/3/2016/01/physio_005.jpg" className="img-fluid rounded" alt="" />
                    <div className="mt-4">
                        <div className="fs-5 text-secondary fw-bold">
                            <small className="px-3">By <span>Writer Name</span></small>
                            <span>&#47;</span>
                            <small className="px-3">0 Comments</small>
                            <span>&#47;</span>
                            <small className="px-3">Tags, Tags, Tags</small>
                            <span>&#47;</span>
                            <small className="px-3">Category</small>
                        </div>
                        <hr />
                        <h1 className="fs-2 fw-bold blog-title py-3 secondary-text">Identifying And Treating Pain From Nerve Tension</h1>
                        <p>Nerve tension is pain that occurs because a nerve is being compressed or stuck in its surrounding tissue which prevents it from moving within its tract like it normally does. This can happen for a variety of reasons. If a joint has been immobile for a period of time it increases the risk that a nerve can get a little stuck</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Huic mori optimum esse propter desperationem sapientiae, illi propter spem vivere. Dic in quovis conventu te omnia facere, ne doleas. Duo Reges: constructio interrete. Hosne igitur laudas et hanc eorum, inquam, sententiam sequi nos censes oportere? Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quid enim est a Chrysippo praetermissum in Stoicis? Sed quanta sit alias, nunc tantum possitne esse tanta. Ne amores quidem sanctos a sapiente alienos esse arbitrantur. Prodest, inquit, mihi eo esse animo.</p>
                        <p>Tibi hoc incredibile, quod beatissimum. An dolor longissimus quisque miserrimus, voluptatem non optabiliorem diuturnitas facit? Quia nec honesto quic quam honestius nec turpi turpius. Quod idem cum vestri faciant, non satis magnam tribuunt inventoribus gratiam. De ingenio eius in his disputationibus, non de moribus quaeritur. Et ille ridens: Video, inquit, quid agas; Tria genera bonorum; Non laboro, inquit, de nomine.</p>
                        <p>Non igitur de improbo, sed de callido improbo quaerimus, qualis Q. Haeret in salebra. Aliter homines, aliter philosophos loqui putas oportere? Quod ea non occurrentia fingunt, vincunt Aristonem;</p>
                        <blockquote>Nihil opus est exemplis hoc facere longius. Sed ad haec, nisi molestum est, habeo quae velim. Ita ceterorum sententiis semotis relinquitur non mihi cum Torquato, sed virtuti cum voluptate certatio. Quae tamen a te agetur non melior, quam illae sunt, quas interdum optines.</blockquote>
                        <p>Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Nemo nostrum istius generis asotos iucunde putat vivere. Ex rebus enim timiditas, non ex vocabulis nascitur. Atqui haec patefactio quasi rerum opertarum, cum quid quidque sit aperitur, definitio est. Videsne quam sit magna dissensio? Numquam facies.</p>
                    </div>
                    <hr className="my-3" />
                    <div className="mz-3">
                        <h1 className="fs-2 fw-bold blog-title py-2 secondary-text">Leave a Reply</h1>
                        <p className="text-secondary service-font-size">Your email address will not be published. Required fields are marked *</p>
                        <div>
                            <div class="row mb-3">
                                <div className="col-12 col-md-4">
                                    <label for="exampleFormControlInput1" class="form-label text-secondary">Name*</label>
                                    <input type="text" class="form-control shadow-none" id="fullName" placeholder="Your Name" />
                                </div>
                                <div className="col-12 col-md-4">
                                    <label for="exampleFormControlInput1" class="form-label text-secondary">Email Address*</label>
                                    <input type="email" class="form-control shadow-none" id="emailId" placeholder="name@example.com" />
                                </div>
                                <div className="col-12 col-md-4">
                                    <label for="exampleFormControlInput1" class="form-label text-secondary">Website</label>
                                    <input type="email" class="form-control shadow-none" id="website" placeholder="https://example.com" />
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label text-secondary">Comment*</label>
                                <textarea class="form-control shadow-none" id="exampleFormControlTextarea1" rows="8"></textarea>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input shadow-none" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label text-secondary" for="flexCheckDefault">
                                    Save my name, email, and website in this browser for the next time I comment.
                                </label>
                            </div>
                            <button className="btn btn-info rounded-pill text-white fw-bold mt-2 mb-5 shadow-none">Submit</button>
                        </div>
                    </div>
                </div>
                {/* sidebar */}
                <div className="col-12 col-md-3">
                    <div>
                        <form class="d-flex">
                            <input class="form-control me-2 shadow-none" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-info text-white fw-bold shadow-none">Search</button>
                        </form>
                    </div>
                    <div className="bg-info service-list mt-4 pb-4">
                        <h3 className="fw-bold text-white text-center pt-4">Our Services</h3>
                        <ul className="lh-lg list-unstyled text-decoration-underline ps-4 side-text-color fw-bold">
                            <li>View all Services</li>
                            <li>Chiropractic Therapy</li>
                            <li>Clinical Pilates</li>
                            <li>Massage Therapy</li>
                            <li>Physical Therapy</li>
                            <li>Sport Injuries</li>
                            <li>Work Injuries</li>
                        </ul>
                    </div>
                    <div className="mt-4 mb-5">
                        <h3 className="fw-bold text-center">Opening Hours</h3>
                        <div className="side-table p-2 rounded">
                            <table className="table">
                                <tbody className="">
                                    <tr>
                                        <td>Monday</td>
                                        <td className="text-end">9 AM-4 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Tuesday</td>
                                        <td className="text-end">9 AM-4 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Wednesday</td>
                                        <td className="text-end">9 AM-4 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Thursday</td>
                                        <td className="text-end">9 AM-4 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Friday</td>
                                        <td className="text-end">9 AM-4 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Saturday</td>
                                        <td className="text-end">9 AM-4 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Sunday</td>
                                        <td className="text-end"><span className="badge bg-dark">CLOSED</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default BlogPost;