import React from 'react';
import {
  ChakraProvider,
  Box,
  // Grid,
  theme,
} from '@chakra-ui/react';
import { BrowserRouter as Router, } from 'react-router-dom'

// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import CustomAspectRatio from './components/CustomAspectRatio'
// import CustomBox from './components/CustomBox'
// import CustomCenter from './components/CustomCenter'
// import CustomFlex from './components/CustomFlex'
// import CustomGrid from './components/CustomGrid'
// import CustomSimpleGrid from './components/CustomSimpleGrid'
// import CustomStack from './components/CustomStack'
// import CustomWrap from './components/CustomWrap'

// import CustomButton from './formComponents/CustomButton'
// import CustomCheckbox from './formComponents/CustomCheckbox'
// import CustomEditable from './formComponents/CustomEditable'
// import CustomFormControl from './formComponents/CustomFormControl'
// import CustomIconButton from './formComponents/CustomIconButton'
// import CustomInput from './formComponents/CustomInput'
// import CustomNumberInput from './formComponents/CustomNumberInput'
// import CustomPinInput from './formComponents/CustomPinInput'
// import CustomRadio from './formComponents/CustomRadio'
// import CustomSelect from './formComponents/CustomSelect'
// import CustomSlider from './formComponents/CustomSlider';
// import CustomSwitch from './formComponents/CustomSwitch';
// import CustomTextArea from './formComponents/CustomTextArea';

// import CustomBadge from './dataDisplayComponents/CustomBadge';
// import CustomCode from './dataDisplayComponents/CustomCode';
// import CustomDivider from './dataDisplayComponents/CustomDivider';
// import CustomKbd from './dataDisplayComponents/CustomKbd';
// import CustomList from './dataDisplayComponents/CustomList';
// import CustomStat from './dataDisplayComponents/CustomStat';
// import CustomTable from './dataDisplayComponents/CustomTable';
// import CustomTag from './dataDisplayComponents/CustomTag';

// import CustomAlert from './feedbackComponents/CustomAlert';
// import CustomCircularProgress from './feedbackComponents/CustomCircularProgress';
// import CustomProgress from './feedbackComponents/CustomProgress';
// import CustomSkeleton from './feedbackComponents/CustomSkeleton';
// import CustomSpinner from './feedbackComponents/CustomSpinner';
// import CustomToast from './feedbackComponents/CustomToast';

// import CustomText from './typographyComponents/CustomText';
// import CustomHeading from './typographyComponents/CustomHeading';

// import CustomAlertDialog from './overlayComponents/CustomAlertDialog';
// import CustomDrawer from './overlayComponents/CustomDrawer';
// import CustomMenu from './overlayComponents/CustomMenu';
// import CustomModal from './overlayComponents/CustomModal';
// import CustomPopover from './overlayComponents/CustomPopover';
// import CustomTooltip from './overlayComponents/CustomTooltip';

// import CustomAccordion from './disclosureComponents/CustomAccordion';
// import CustomTabs from './disclosureComponents/CustomTabs';
// import CustomVisuallyHidden from './disclosureComponents/CustomVisuallyHidden';

// import CustomBreadcrumb from './navigationComponents/CustomBreadcrumb';
// import CustomLink from './navigationComponents/CustomLink';
// import CustomLinkOverlay from './navigationComponents/CustomLinkOverlay';

import CustomAvatar from './mediaComponents/CustomAvatar';
import CustomIcon from './mediaComponents/CustomIcon';
import CustomPortal from './otherComponents/CustomPortal';
import CustomTransitions from './otherComponents/CustomTransitions';
import Hooks from './hooks/Hooks';

// import { handleAPI } from './api/handleAPI';
// import notify from './utils/toast'

function App() {
  // const [books, setBooks] = useState([])

  // useEffect(() => {
  //   getBooks();
  // }, [])

  // const getBooks = () => {
  //   handleAPI('/books', 'get', false, )
  //   .then(r => r.data.body)
  //   .then(body => {
  //     notify.success('Books fetched successfully!')
  //     setBooks(body)
  //   })
  //   .catch(err => {
  //     console.error(`err`, err.response)
  //     // notify.error('Some error happened!')
  //   })
  // }

  return (
    <ChakraProvider theme={theme}>
      <Router>
      <Box w="100%" h="100vh" p={50}>
        {/* <CustomAspectRatio />
        <CustomBox />
        <CustomCenter />
        <CustomFlex />
        <CustomGrid /> 
        <CustomSimpleGrid />
        <CustomStack /> 
        <CustomWrap /> 
        <CustomButton /> 
        <CustomCheckbox /> 
        <CustomEditable />
        <CustomFormControl />
        <CustomIconButton /> 
        <CustomInput /> 
        <CustomNumberInput /> 
        <CustomPinInput />
        <CustomRadio /> 
        <CustomSelect /> 
        <CustomSlider />
        <CustomSwitch />
        <CustomTextArea />
        <CustomBadge />
        <CustomCode />
        <CustomDivider />
        <CustomKbd />
        <CustomList />
        <CustomStat />
        <CustomTable />
        <CustomTag />
        <CustomAlert /> 
        <CustomCircularProgress />
        <CustomProgress />
        <CustomSkeleton /> 
        <CustomSpinner />
        <CustomToast />
        <CustomText />
        <CustomHeading />
        <CustomAlertDialog /> 
        <CustomDrawer />
        <CustomMenu />
        <CustomModal />
        <CustomPopover /> 
        <CustomTooltip />
        <CustomAccordion /> 
        <CustomTabs />
        <CustomVisuallyHidden />
        <CustomBreadcrumb />
        <CustomLink />
        <CustomLinkOverlay /> 
        <CustomAvatar />
        <CustomIcon />
        <CustomPortal />
        <CustomTransitions /> */}
        <Hooks />
      </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
