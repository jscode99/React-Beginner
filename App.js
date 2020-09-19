import React from "react";
import "./App.css";
import ComponentA from "./ComponentA";
// import { UserProvider } from "./UserContext";


function App() {
  return (
    <div className="App">
      {/* <UserProvider value='jishnu'> */}
        <ComponentA />
      {/* </UserProvider> */}

      {/* <CounterRender
        render={(count, clickHandler) => (
          <ClickCounter2
            count={count}
            clickHandler={clickHandler}
          ></ClickCounter2>
        )}
      />

      <CounterRender
        render={(count, clickHandler) => (
          <HoverCounter2
            count={count}
            clickHandler={clickHandler}
          ></HoverCounter2>
        )}
      />

      <User name={(isLoggedIn) => (
      isLoggedIn ? 'Jishnu' : 'Guest'
      )}/>  */}

      {/* <ClickCounter2 />
      <HoverCounter2 />
      <User render={(isLoggedIn) => isLoggedIn ? 'Jishnu' : 'Guest'}/> */}
      {/*       
     <ClickCounter name='Jishnu'/>
      
      <HoverCounter/> */}
      {/* <ErrorBoundary>
        <ErrorFunc heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <ErrorFunc heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <ErrorFunc heroName="joker" />
      </ErrorBoundary> */}
      {/* <PortalDemo /> */}
      {/* <FRparentInput/> */}
      {/* <FocusInput/> */}
      {/* <RefsDemo/> */}
      {/* <ParentRegComp/> */}
      {/* <PureComp/> */}
      {/* <Fragments/> */}
      {/* <LifeCycleUnmount/> */}
      {/* <LifeCycleA/> */}
      {/* <FormComponents /> */}
      {/* <h1 className='error'>Error</h1> */}
      {/* <h1 className={styles.sucess}>sucess</h1> */}
      {/* <GreettingUser /> */}
      {/* <NameList/> */}
      {/* <IndexListing/> */}
      {/* <Stylesheet primary={false} secondary={true} /> */}
      {/* <Inline/> */}
      {/* <ParentComponent /> */}
      {/* <Counter />
      <Greetings firstName="JISHNU" secondName="SATHEESH" className="App-header"/>
      <Greet firstName ="User" secondName="Interface.io"/>
      <ButtonClick />
       */}
    </div>
  );
}



export default App;
