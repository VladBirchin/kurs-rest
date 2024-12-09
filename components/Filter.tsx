import React from 'react';
import {Select, MenuItem, FormControl, useTheme} from '@mui/material';
import Image from 'next/image';

interface FilterProps {
    categories: string[];
    selectedCategory: string;
    onChange: (category: string) => void;
}

const Filter: React.FC<FilterProps> = ({ categories, selectedCategory, onChange }) => {
    const theme = useTheme();
    return (
        <FormControl fullWidth sx={{

            backgroundColor: theme.palette.mode === 'dark' ? '#222' : '#F5DACC',
            padding: '16px',
            '@media (max-width: 600px)': {
                padding: '5px',
            },
            '@media (min-width: 800px) and (max-width: 1300px)': {
                padding: '10px',
            }
        }}>

            <Select
                value={selectedCategory}
                onChange={(e) => onChange(e.target.value as string)}
                sx={{

                    fontFamily: 'Satoshi, sans-serif',
                    fontSize: '12px',
                    fontWeight: 700,
                    lineHeight: '16.2px',
                    letterSpacing: '0.1978px',
                    textAlign: 'left',
                    textUnderlinePosition: 'from-font',
                    textDecorationSkipInk: 'none',
                    backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#ffff',
                    border: 'none',
                }}
            >
                <MenuItem value="" sx={{
                    height: "48px",
                    '&:hover': {
                        backgroundColor: '#FAEBE3',
                    },
                }}>Всі категорії</MenuItem>

                {categories.map((category) => (
                    <MenuItem
                        key={category}
                        value={category}
                        sx={{
                            height: "48px",
                            marginTop: "6px",
                            padding: 0,
                            '&:hover': {
                                backgroundColor: '#FAEBE3',
                            },
                            fontFamily: 'Satoshi',
                            fontSize: '14px',
                            fontWeight: 500,
                            lineHeight: '18.9px',
                            letterSpacing: '0.23076923191547394px',
                            textAlign: 'left',
                            textUnderlinePosition: 'from-font',
                        }}
                    >
                        <Image
                            src="/img/photo.png"
                            alt={category}
                            width={24}
                            height={24}
                            style={{ margin: '0 16px' }}
                        />
                        {category}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default Filter;
