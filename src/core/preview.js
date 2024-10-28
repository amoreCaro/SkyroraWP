import { useEffect, useState } from 'react';

export const renderPreview = ({ setIsModalOpen, blockName, blockIndex }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoaded(true); 
        }, 1000); 

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {isLoaded ? (
                <div className='app-block app-block--preview'>
                    <div className='app-block__header'>
                        <div className='app-block__group'>
                            <div className='app-block__index'>
                                {blockIndex}
                            </div>
                            <div className='app-block__name'>
                                Block - {blockName}
                            </div>
                        </div>
                        <div className='app-block__group app-block__group--actions'>
                            <button className='app-icon -view app-js-tooltip' type='button' title='View Block'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                            </button>
                            <button className='app-icon -plus app-js-tooltip' type='button' title='Add Block'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                            </button>
                            <button className='app-icon -duplicate app-js-tooltip' type='button' title='Duplicate Block'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                            </button>
                            <button className='app-icon -minus app-js-tooltip' type='button' title='Remove Block'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus-circle"><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                            </button>
                        </div>
                    </div>
                    <div className='app-block__body'>
                        <button className='btn-none' onClick={() => setIsModalOpen(true)} title='Edit block'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="20px" height="20px" viewBox="-2.5 -2.5 24 24" preserveAspectRatio="xMinYMin" class="jam jam-pencil"><path d="M12.238 5.472L3.2 14.51l-.591 2.016 1.975-.571 9.068-9.068-1.414-1.415zM13.78 3.93l1.414 1.414 1.318-1.318a.5.5 0 0 0 0-.707l-.708-.707a.5.5 0 0 0-.707 0L13.781 3.93zm3.439-2.732l.707.707a2.5 2.5 0 0 1 0 3.535L5.634 17.733l-4.22 1.22a1 1 0 0 1-1.237-1.241l1.248-4.255 12.26-12.26a2.5 2.5 0 0 1 3.535 0z"/></svg>
                        </button>
                    </div>
                </div>
            ) : (
                <div className={`app-block app-block--preview`}>
                    <div className={`app-block__header skeleton-header`}>
                        <div className="app-block__group">
                            <div className={`app-block__index skeleton`}>
                            </div>
                            <div className={`app-block__name skeleton`}>
                            </div>
                        </div>
                        <div className={`app-block__group app-block__group--actions skeleton`}>
                        </div>
                    </div>
                    <div className={`app-block__body skeleton-body skeleton-bg`}>
                        <button className={`btn-none skeleton`}>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
