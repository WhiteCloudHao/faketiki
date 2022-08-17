import { Box, Chip, makeStyles } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {},
    list: {
        display: 'flex',
        flexFlow: 'row nowrap',
        padding: 0,
        '& > li': {
            listStyle: 'none',
            margin: '0 8px'
        }
    },
}))

function ViewFilter({filters, onChange}) {
    const classes = useStyles();
    const FILTER_VIEW_LIST = [
    {
        id: 1,
        getLabel:() => 'Miễn phí vận chuyển',
        isVisible: () =>  true,
        isActive: (filters) => filters.isFreeShip,
        isRemovable: false,
        onRemove: () => {},
        onToggle: (filters) => {
            const newFilters = {...filters};
            if(filters.isFreeShip) {
                delete newFilters.isFreeShip;
            } else {
                newFilters.isFreeShip = true;
            }
           return newFilters;
        }

    },
    {
        id: 2,
        getLabel:(filters) => `${filters.salePrice_gte} - ${filters.salePrice_lte}`,
        isVisible: (filters) =>  filters.salePrice_gte >= 0 && filters.salePrice_lte,
        isActive: (filters) => filters.salePrice_gte >= 0 && filters.salePrice_lte,
        isRemovable: true,
        onRemove: (filters) => {
            if(!onChange) return;
            const newFilters = {...filters};
            delete newFilters.salePrice_gte;
            delete newFilters.salePrice_lte;

            onChange(newFilters);
        },
        onToggle: (filters) => {}

    },
    {
        id: 3,
        getLabel:(filters) => 'Có khuyến mãi',
        isVisible: (filters) => filters.isPromotion,
        isActive: (filters) => filters.isPromotion,
        isRemovable: true,
        onRemove: (filters) => {
            if(!onChange) return;
            const newFilters = {...filters};
            delete newFilters.isPromotion;

            onChange(newFilters);
        },
        onToggle: (filters) => {}

    },
    {
        id: 4,
        getLabel:(filters) => '',
        isVisible: () =>  false,
        isActive: (filters) => false,
        isRemovable: true,
        onRemove: (filters) => {
            if(!onChange) return;
            const newFilters = {...filters};
            delete newFilters.isPromotion;

            onChange(newFilters);
        },
        onToggle: (filters) => {}

    },
]
    

    return (
        <Box component = "ul" className={classes.list} >
            {FILTER_VIEW_LIST.filter(x => x.isVisible(filters)).map(x => (
                
                    <li key={x.id}>
                        <Chip  size = "small"
                            label ={x.getLabel(filters)}
                            
                            clickable ={!x.isRemovable}
                            color = {x.isActive(filters)? 'secondary': 'default'}
                            onClick = {
                                x.isRemovable? null: () => {
                                    if(!onChange) return ;
                                    const newFilters = x.onToggle(filters)
                                    onChange(newFilters);
                                    
                                }
                                    
                                
                            }
                            onDelete = {x.isRemovable?() => {
                                x.onRemove(filters);
                            }: null}
                        />
                        
                        
                    </li>
                )
                )}
        </Box>
    )
}
export default ViewFilter;