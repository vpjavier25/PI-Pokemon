import './pages.css'

function Pages({ currentPage, pages, clickHandler, nextHandler, prevHandler, minNumberOfPage, maxNumberOfPage, clickLoadPrev, clickLoadNext }) {

    return (
        <>
            <div className="pages">
                {/*boton para cargar la pagina previa*/}
                <span className='buttons' onClick={prevHandler}>prev</span>
                {/*si el minimo numero de paginas actual es mayor que el menor indice posible se mustra un boton ... que carga la fila de paginas previas*/}
                {minNumberOfPage > pages[0] ? <span className='buttons' name='prevPages' onClick={clickLoadPrev}>...</span> : null}
                {/*se renderiza la fila de paginas*/}
                {pages.map((page) => {
                    return (
                        <>
                            {/*no cree paginas en caso de no tener minimo 12 elementos, en caso de usar los filtros*/}
                            {page < maxNumberOfPage + 1 && page > minNumberOfPage - 1 ? <span className={currentPage === page ? 'active' : 'buttons'} key={page} id={page} onClick={clickHandler}>{page}</span> : null}

                        </>

                    )
                }

                )} 
                {/* similar al que cargaa las paginas previas */}
                {maxNumberOfPage < pages[pages.length - 1] ? <span className='buttons' name='nextPages' onClick={clickLoadNext}>...</span> : null}
                {/*boton para cambiar a la siguiente pagina*/}
                <span className='buttons' onClick={nextHandler}>next</span>
            </div>

        </>
    )
}

export default Pages;