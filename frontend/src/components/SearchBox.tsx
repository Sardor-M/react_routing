import React, {useState} from 'react';
import styled from "styled-components";

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    width: 300px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
`

const SearchInput = styled.input`
    flex: 1;
    padding: 8px;
    border: none;
    border-radius: 5px;
`

const SearchButton = styled.button`
    padding: 8px 15px;
    background-color: #007bff;
    color:#fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`

//     .search-container button {
//     padding: 8px 15px;
//     background-color: #007bff;
//     color: #fff;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
// }
//
// .search-container button:hover {
//     background-color: #0056b3;
// }




interface Tag {
    id: number;
    name: string;
}

function SearchBox() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [tags, setTags] = useState<Tag[]>([
            {id: 1, name: "tag1"},
            { id: 2, name: "tag2"},
            {id: 3, name: "tag3"},
            { id: 4, name: "tag4"},
        ]
    )

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    }

    const filterChange = tags.filter(tag =>
        tag.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <>
            <SearchContainer>
                <SearchInput type="text" placeholder="Search ..."/>
                <SearchButton type="submit"> Search</SearchButton>
            </SearchContainer>
        </>

    );
}

export default SearchBox;