import { keyframes } from "styled-components";

export const rotate = keyframes`
0%{

}
50%{
}
100%{ 
     rotate: 180deg;
}
`;

export const skeletonLoading = keyframes`
0%{
 opacity: 1;
}
50%{
     opacity: 0.5;
}
100%{
     opacity: 1;
}
`;
