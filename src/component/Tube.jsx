import React from 'react';
import { styled } from '@mui/system';

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    padding: '20px',
    boxSizing: 'border-box',
});

const TubeContainer = styled('div')({
    width: '100%',
    height: '40px',
    borderRadius: '40px',
    border: '1px solid black',
    position: 'relative',
    overflow: 'hidden',
});

const DottedLine = styled('div')({
    width: '90%', // Adjusted to leave space for the leaves
    height: '2px',
    position: 'absolute',
    top: '50%',
    left: '5%', // Start the line behind the first leaf
    borderTop: '2px dotted #000',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});

const MapleLeaf = styled('div')({
    width: '40px',
    height: '40px',
    backgroundSize: 'cover',
    position: 'absolute',
    transform: 'translateY(-50%)', // Center vertically within the tube
    top: '50%', // Ensure the leaf is centered vertically
});

const TextContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: '20px',
});

const Text = styled('div')({
    textAlign: 'center',
    whiteSpace: 'nowrap',
    fontFamily: 'Jost-bold'
});

const UnorderedListContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: '20px',
});

const UnorderedList = styled('ul')({
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    textAlign: 'center',
    whiteSpace: 'nowrap',
});

const ListItem = styled('li')({
    marginBottom: '5px',
    textAlign: 'left',
    listStyle: 'none',
});

const HorizontalTube = ({ noOfLeafsToBeRed = 1 }) => {
    return (
        <Container>
            <TextContainer>
                <Text>Discover/ Define</Text>
                <Text>Ideate</Text>
                <Text>Prototype</Text>
                <Text>Test</Text>
            </TextContainer>
            <TubeContainer>
                <DottedLine>
                    <MapleLeaf style={{ left: '-2%', backgroundImage: (0 < noOfLeafsToBeRed) ? 'url(maple.svg)' : 'url(blackmaple.svg)' }} />
                    <MapleLeaf style={{ left: '33.33%', backgroundImage: (1 < noOfLeafsToBeRed) ? 'url(maple.svg)' : 'url(blackmaple.svg)' }} />
                    <MapleLeaf style={{ left: '66.66%', backgroundImage: (2 < noOfLeafsToBeRed) ? 'url(maple.svg)' : 'url(blackmaple.svg)' }} />
                    <MapleLeaf style={{ left: '100%', transform: 'translateX(-50%) translateY(-50%)', backgroundImage: (3 < noOfLeafsToBeRed) ? 'url(maple.svg)' : 'url(blackmaple.svg)' }} />
                </DottedLine>
            </TubeContainer>
            <UnorderedListContainer>
                <UnorderedList style={{
                    color: (0 < noOfLeafsToBeRed) ? '#DD2E44' : 'black',
                    fontFamily: (0 < noOfLeafsToBeRed) ? 'Jost-bold' : 'Jost-light-300'
                }}>
                    <ListItem>• User Interviews</ListItem>
                    <ListItem>• Insights</ListItem>
                    <ListItem>• Personas</ListItem>
                    <ListItem>• Affinity Diagram</ListItem>
                </UnorderedList>
                <UnorderedList style={{
                    color: (1 < noOfLeafsToBeRed) ? '#DD2E44' : 'black',
                    fontFamily: (1 < noOfLeafsToBeRed) ? 'Jost-bold' : 'Jost-light-300'
                }}>
                    <ListItem>• Information Architecture</ListItem>
                    <ListItem>• User Flows</ListItem>
                </UnorderedList>
                <UnorderedList style={{
                    color: (2 < noOfLeafsToBeRed) ? '#DD2E44' : 'black',
                    fontFamily: (2 < noOfLeafsToBeRed) ? 'Jost-bold' : 'Jost-light-300'
                }}>
                    <ListItem>• Wireframes</ListItem>
                    <ListItem>• Paper, Lo-Fi & Hi-fi</ListItem>
                    <ListItem>• Responsive Design</ListItem>
                </UnorderedList>
                <UnorderedList style={{
                    color: (3 < noOfLeafsToBeRed) ? '#DD2E44' : 'black',
                    fontFamily: (3 < noOfLeafsToBeRed) ? 'Jost-bold' : 'Jost-light-300'
                }}>
                    <ListItem>• Prototype</ListItem>
                    <ListItem>• Learning</ListItem>
                </UnorderedList>
            </UnorderedListContainer>
        </Container>
    );
};

export default HorizontalTube;
