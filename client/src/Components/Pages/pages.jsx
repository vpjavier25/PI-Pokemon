import './pages.css'

function Pages({ currentPage, pages, clickHandler, nextHandler, prevHandler, minNumberOfPage, maxNumberOfPage, clickLoadPrev, clickLoadNext }) {

    return (
        <>
            <div className="pages">
                <span className='buttons' onClick={prevHandler}>prev</span>
                {minNumberOfPage > pages[0] ? <span className='buttons' name='prevPages' onClick={clickLoadPrev}>...</span> : null}

                {pages.map((page) => {
                    return (
                        <>

                            {page < maxNumberOfPage + 1 && page > minNumberOfPage - 1 ? <span className={currentPage === page ? 'active' : 'buttons'} key={page} id={page} onClick={clickHandler}>{page}</span> : null}

                        </>

                    )
                }

                )} 
                {maxNumberOfPage < pages[pages.length - 1] ? <span className='buttons' name='nextPages' onClick={clickLoadNext}>...</span> : null}
                <span className='buttons' onClick={nextHandler}>next</span>
            </div>

        </>
    )
}

export default Pages;