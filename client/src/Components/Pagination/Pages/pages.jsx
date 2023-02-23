import './pages.css'

function Pages({ currentPage,pages, clickHandler, nextHandler, prevHandler, minNumberOfPage, maxNumberOfPage, clickLoadPrev, clickLoadNext }) {

    return (
        <>
            <div className="pages">
                <span onClick={prevHandler}>prev</span>
                {minNumberOfPage > pages[0] ? <span name='prevPages' onClick={clickLoadPrev}>...</span> : null}
                
                    {pages.map((page) => {
                        return (
                            <>

                                {page < maxNumberOfPage + 1 && page > minNumberOfPage - 1 ? <span  className={currentPage === page? 'active':null} key={page} id={page} onClick={clickHandler}>{page}</span> : null}

                            </>

                        )
                    }

                    )}
                

                {maxNumberOfPage < pages[pages.length - 1] ? <span name='nextPages' onClick={clickLoadNext}>...</span> : null}
                <span onClick={nextHandler}>next</span>
            </div>

        </>
    )
}

export default Pages;