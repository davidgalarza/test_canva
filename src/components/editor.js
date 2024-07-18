'use client'

import React, { useEffect } from 'react';
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { PagesTimeline } from 'polotno/pages-timeline';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
import { SidePanel } from 'polotno/side-panel';
import { Workspace } from 'polotno/canvas/workspace';

import '@blueprintjs/core/lib/css/blueprint.css';

import { createStore } from 'polotno/model/store';

const store = createStore({
    key: 'nFA5H9elEytDyPyvKL7T', // you can create it here: https://polotno.com/cabinet/
    // you can hide back-link on a paid license
    // but it will be good if you can keep it for Polotno project support
    showCredit: true,
});


export const Editor = () => {
    useEffect(() => {
        store.loadJSON({
            "width": 1920,
            "height": 1080,
            "pages": [
              {
                "id": "slide1",
                "children": [
                  {
                    "type": "text",
                    "id": "title1",
                    "name": "Title",
                    "x": 100,
                    "y": 50,
                    "width": 1720,
                    "height": 100,
                    "text": "What is Unity?",
                    "fontSize": 64,
                    "fontFamily": "Arial",
                    "fontWeight": "bold",
                    "fill": "#000000",
                    "align": "center"
                  },
                  {
                    "type": "text",
                    "id": "subtitle1",
                    "name": "Subtitle",
                    "x": 100,
                    "y": 180,
                    "width": 1720,
                    "height": 50,
                    "text": "The power of togetherness",
                    "fontSize": 36,
                    "fontFamily": "Arial",
                    "fontWeight": "normal",
                    "fill": "#333333",
                    "align": "center"
                  },
                  {
                    "type": "line",
                    "id": "line1",
                    "name": "Separator Line",
                    "x": 100,
                    "y": 250,
                    "width": 1720,
                    "height": 2,
                    "color": "#000000",
                    "dash": [5, 5]
                  },
                  {
                    "type": "image",
                    "id": "image1",
                    "name": "Unity Image",
                    "x": 710,
                    "y": 300,
                    "width": 500,
                    "height": 400,
                    "src": "https://example.com/unity-image.jpg",
                    "cropX": 0,
                    "cropY": 0,
                    "cropWidth": 500,
                    "cropHeight": 400,
                    "cornerRadius": 20
                  },
                  {
                    "type": "text",
                    "id": "content1",
                    "name": "Content",
                    "x": 100,
                    "y": 750,
                    "width": 1720,
                    "height": 300,
                    "text": "Unity is the state of being united or joined as a whole. It embodies the strength that comes from being together and working towards a common goal.",
                    "fontSize": 28,
                    "fontFamily": "Arial",
                    "fontWeight": "normal",
                    "fill": "#333333",
                    "align": "justify"
                  }
                ]
              },
              {
                "id": "slide2",
                "children": [
                  {
                    "type": "text",
                    "id": "title2",
                    "name": "Title",
                    "x": 100,
                    "y": 50,
                    "width": 1720,
                    "height": 100,
                    "text": "Why is Unity Important?",
                    "fontSize": 64,
                    "fontFamily": "Arial",
                    "fontWeight": "bold",
                    "fill": "#000000",
                    "align": "center"
                  },
                  {
                    "type": "text",
                    "id": "content2",
                    "name": "Content",
                    "x": 100,
                    "y": 200,
                    "width": 1720,
                    "height": 600,
                    "text": "Unity fosters collaboration, cooperation, and harmony. It enables individuals to come together to achieve goals that are difficult to accomplish alone. Whether in a family, community, or workplace, unity creates a sense of belonging and mutual support.",
                    "fontSize": 28,
                    "fontFamily": "Arial",
                    "fontWeight": "normal",
                    "fill": "#333333",
                    "align": "justify"
                  },
                  {
                    "type": "image",
                    "id": "image2",
                    "name": "Collaboration Image",
                    "x": 710,
                    "y": 820,
                    "width": 500,
                    "height": 200,
                    "src": "https://example.com/collaboration-image.jpg",
                    "cropX": 0,
                    "cropY": 0,
                    "cropWidth": 500,
                    "cropHeight": 200,
                    "cornerRadius": 20
                  }
                ]
              },
              {
                "id": "slide3",
                "children": [
                  {
                    "type": "text",
                    "id": "title3",
                    "name": "Title",
                    "x": 100,
                    "y": 50,
                    "width": 1720,
                    "height": 100,
                    "text": "Examples of Unity",
                    "fontSize": 64,
                    "fontFamily": "Arial",
                    "fontWeight": "bold",
                    "fill": "#000000",
                    "align": "center"
                  },
                  {
                    "type": "text",
                    "id": "example1",
                    "name": "Example 1",
                    "x": 100,
                    "y": 200,
                    "width": 1720,
                    "height": 100,
                    "text": "1. Team sports: Players working together to win a game.",
                    "fontSize": 28,
                    "fontFamily": "Arial",
                    "fontWeight": "normal",
                    "fill": "#333333",
                    "align": "left"
                  },
                  {
                    "type": "text",
                    "id": "example2",
                    "name": "Example 2",
                    "x": 100,
                    "y": 350,
                    "width": 1720,
                    "height": 100,
                    "text": "2. Community service: Neighbors coming together to improve their community.",
                    "fontSize": 28,
                    "fontFamily": "Arial",
                    "fontWeight": "normal",
                    "fill": "#333333",
                    "align": "left"
                  },
                  {
                    "type": "text",
                    "id": "example3",
                    "name": "Example 3",
                    "x": 100,
                    "y": 500,
                    "width": 1720,
                    "height": 100,
                    "text": "3. Work projects: Colleagues collaborating to complete a task.",
                    "fontSize": 28,
                    "fontFamily": "Arial",
                    "fontWeight": "normal",
                    "fill": "#333333",
                    "align": "left"
                  },
                  {
                    "type": "line",
                    "id": "line2",
                    "name": "Separator Line",
                    "x": 100,
                    "y": 650,
                    "width": 1720,
                    "height": 2,
                    "color": "#000000",
                    "dash": [5, 5]
                  },
                  {
                    "type": "image",
                    "id": "image3",
                    "name": "Unity Symbol Image",
                    "x": 710,
                    "y": 700,
                    "width": 500,
                    "height": 300,
                    "src": "https://example.com/unity-symbol.jpg",
                    "cropX": 0,
                    "cropY": 0,
                    "cropWidth": 500,
                    "cropHeight": 300,
                    "cornerRadius": 20
                  }
                ]
              }
            ]
          }
          
          
          
        )
    }, []);
    return (
        <div>
            <button onClick={() => console.log(store.toJSON())}>print</button>
            <PolotnoContainer style={{ width: '100vw', height: '100vh' }}>
                <SidePanelWrap>
                    <SidePanel store={store} />
                </SidePanelWrap>
                <WorkspaceWrap>
                    <Toolbar store={store} downloadButtonEnabled />
                    <Workspace store={store} />
                    <ZoomButtons store={store} />
                    <PagesTimeline store={store} />
                </WorkspaceWrap>
            </PolotnoContainer>

        </div>
    );
};

export default Editor;
