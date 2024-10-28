import { Button } from '@wordpress/components';

export const previewTabs = ({ setAttributes,attributes,activeTab, setActiveTab, tabContent,tabItems, tabStyle, tabView }) => {
    
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const getSliderPosition = (tab) => {
        switch (tab) {
            case 'tabContent':
                return 0;
            case 'tabItems':
                return 60;
            case 'tabStyle':
                return 120;
            case 'tabView':
                return 180; 
            default:
                return 0;
        }
    };

    return (
        <div className='tabs tabs--vertical'>
            <div className="tabs-navigation" style={{ position: 'relative' }}>
                <Button
                    className={`tabs-navigation__item ${activeTab === 'tabContent' ? 'active' : ''}`}
                    onClick={() => handleTabClick('tabContent')}
                >
                    Content
                </Button>
                <Button
                    className={`tabs-navigation__item ${activeTab === 'tabItems' ? 'active' : ''}`}
                    onClick={() => handleTabClick('tabItems')}
                >
                    Items
                </Button>
                <Button
                    className={`tabs-navigation__item ${activeTab === 'tabStyle' ? 'active' : ''}`}
                    onClick={() => handleTabClick('tabStyle')}
                >
                    Style
                </Button>
                <Button
                    className={`tabs-navigation__item ${activeTab === 'tabView' ? 'active' : ''}`}
                    onClick={() => handleTabClick('tabView')}
                >
                    View
                </Button>
                <div className='tabs-slider' style={{ top: `${getSliderPosition(activeTab)}px`, position: 'absolute', transition: 'top 0.3s ease' }}></div>
            </div>
            <div className="tabs-content">
                {activeTab === 'tabContent' && <div className='tabs-content__item active'>{tabContent()}</div>}
                {activeTab === 'tabItems' && <div className='tabs-content__item active'>{tabItems()}</div>}
                {activeTab === 'tabStyle' && <div className='tabs-content__item active'>{tabStyle()}</div>}
                {activeTab === 'tabView' && <div className='tabs-content__item active'>{tabView()}</div>}
            </div>
        </div>
    );
};
