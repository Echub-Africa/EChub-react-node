import * as React from 'react';







export default function Accordions() {
  return (
        
        <div className=' accordions'>
              <h1 className='text-center mb-5'>Frequently asked questions</h1>

              <div className='row accordionRow'>
                    <div className='col col-lg-6   col-md-6 col-sm-12 '>
                          <div class="accordion  top" id="accordionExample" >
                                <div class="accordion-item ">
                                      <h2 class="accordion-header" id="headingOne">
                                            <button
                                                  class="accordion-button collapsed bold "
                                                  type="button"
                                                  data-mdb-toggle="collapse"
                                                  data-mdb-target="#collapseOne"
                                                  aria-expanded="true"
                                                  aria-controls="collapseOne"
                                            >
                                                  Where are you based?
                                            </button>
                                      </h2>
                                      <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-mdb-parent="#accordionExample">
                                            <div class="accordion-body">
                                                  <strong>This is the first item's accordion body.</strong> It is hidden by default,
                                                  until the collapse plugin adds the appropriate classes that we use to style each
                                                  element. These classes control the overall appearance, as well as the showing and
                                                  hiding via CSS transitions. You can modify any of this with custom CSS or
                                                  overriding our default variables. It's also worth noting that just about any HTML
                                                  can go within the <strong>.accordion-body</strong>, though the transition does
                                                  limit overflow.
                                            </div>
                                      </div>
                                </div>


                          </div>
                          <div class="accordion" id="accordionExampleY">
                                <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingOneY">
                                            <button class="accordion-button collapsed bold" type="button" data-mdb-toggle="collapse"
                                                  data-mdb-target="#collapseOneY" aria-expanded="true" aria-controls="collapseOneY">
                                                  Is Echub Registered? 
                                            </button>
                                      </h2>
                                      <div id="collapseOneY" class="accordion-collapse collapse " aria-labelledby="headingOneY"
                                            data-mdb-parent="#accordionExampleY">
                                            <div class="accordion-body">
                                                  <strong>This is the first item's accordion body.</strong> It is hidden by
                                                  default, until the collapse plugin adds the appropriate classes that we use to
                                                  style each element. These classes control the overall appearance, as well as
                                                  the showing and hiding via CSS transitions. You can modify any of this with
                                                  custom CSS or overriding our default variables. It's also worth noting that
                                                  just about any HTML can go within the <code>.accordion-body</code>, though the
                                                  transition does limit overflow.
                                            </div>
                                      </div>
                                </div>
                          </div>




                    </div>
                    <div className='col col-lg-6   col-md-6 col-sm-12 '>
                          <div class="accordion top " id="accordionFlushExample">
                                <div class="accordion-item">
                                      <h2 class="accordion-header" id="flush-headingOne">
                                            <button
                                                  class="accordion-button collapsed bold"
                                                  type="button"
                                                  data-mdb-toggle="collapse"
                                                  data-mdb-target="#flush-collapseOne"
                                                  aria-expanded="false"
                                                  aria-controls="flush-collapseOne"
                                            >
                                                  Do you have barbers and fashion designers?
                                            </button>
                                      </h2>
                                      <div
                                            id="flush-collapseOne"
                                            class="accordion-collapse collapse"
                                            aria-labelledby="flush-headingOne"
                                            data-mdb-parent="#accordionFlushExample"
                                      >
                                            <div class="accordion-body">
                                                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                                                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                                                  sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
                                                  et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                  sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                                  craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
                                                  heard of them accusamus labore sustainable VHS.
                                            </div>
                                      </div>
                                </div>


                          </div>
                          <div class="accordion " id="accordionPanelsStayOpenExample" >
                                <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingTwo">
                                            <button class="accordion-button collapsed bold" type="button" data-mdb-toggle="collapse"
                                                  data-mdb-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                                  aria-controls="panelsStayOpen-collapseTwo">
                                                     maintenance
                                                   and repairs check for only N13,399?
                                            </button>
                                      </h2>
                                      <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo">
                                            <div class="accordion-body">
                                                  <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                                  until the collapse plugin adds the appropriate classes that we use to style each
                                                  element. These classes control the overall appearance, as well as the showing and
                                                  hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                                  our default variables. It's also worth noting that just about any HTML can go within
                                                  the <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                      </div>
                                </div>


                          </div>

                    </div>

              </div>

        </div>






  )
}
