import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Mail, 
  Globe, 
  Building2,
  Users,
  ChevronUp,
  Download,
  FileText,
  Linkedin,
  Calendar,
  Layers,
  Clock
} from 'lucide-react';
import { PILLARS, TEAM_MEMBERS, RESOURCES, ECOSYSTEM_PARTNERS } from './constants';

const Logo: React.FC<{ className?: string; forceLight?: boolean }> = ({ className = "h-12", forceLight = false }) => {
  const textColor = forceLight ? "#FFFFFF" : "#242927";

  return (
    <svg 
      viewBox="180 182 490 230" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`w-auto pointer-events-none ${className}`}
    >
      <g>
        <path fill={textColor} d="M414.94,251.65v73.44h-13.89v-47.77l-18.57,47.77h-10.52l-18.66-47.77v47.77h-13.9v-73.44h15.79l22.04,54.61,22.04-54.61h15.69Z"/>
        <path fill={textColor} d="M428.39,263.59c-1.51-1.45-2.27-3.25-2.27-5.41s.75-3.97,2.27-5.41c1.51-1.45,3.4-2.17,5.69-2.17s4.17.72,5.69,2.17c1.51,1.45,2.26,3.25,2.26,5.41s-.75,3.96-2.26,5.41c-1.51,1.45-3.41,2.17-5.69,2.17s-4.18-.72-5.69-2.17Z"/>
        <rect fill={textColor} x="427.51" y="272.62" width="13.79" height="52.48"/>
        <path fill={textColor} d="M470.68,263.63v18.39h27.21v11.66h-27.21v19.44h30.69v11.98h-46.9v-73.44h46.9v11.98h-30.69Z"/>
        <path fill={textColor} d="M522.85,323.63c-3.95-1.76-7.08-4.3-9.37-7.62-2.29-3.32-3.47-7.23-3.54-11.75h15.19c.2,3.04,1.23,5.43,3.09,7.2,1.86,1.76,4.4,2.65,7.64,2.65s5.91-.83,7.8-2.49c1.89-1.65,2.83-3.83,2.83-6.51,0-2.18-.64-3.98-1.93-5.4-1.28-1.41-2.88-2.52-4.81-3.33-1.93-.81-4.57-1.71-7.95-2.7-4.59-1.41-8.31-2.8-11.18-4.18-2.87-1.37-5.34-3.46-7.39-6.24-2.06-2.79-3.09-6.51-3.09-11.17,0-4.37,1.05-8.18,3.14-11.43,2.09-3.24,5.03-5.73,8.81-7.46,3.78-1.73,8.1-2.59,12.96-2.59,7.29,0,13.21,1.86,17.76,5.56,4.56,3.71,7.07,8.87,7.54,15.5h-15.59c-.13-2.54-1.16-4.64-3.08-6.3-1.93-1.65-4.47-2.49-7.65-2.49-2.77,0-4.97.74-6.63,2.23-1.65,1.48-2.48,3.63-2.48,6.45,0,1.98.62,3.62,1.87,4.92,1.25,1.31,2.8,2.37,4.65,3.18,1.86.81,4.47,1.75,7.85,2.8,4.59,1.41,8.33,2.82,11.24,4.23,2.9,1.41,5.4,3.53,7.49,6.35,2.09,2.82,3.14,6.53,3.14,11.12,0,3.95-.98,7.62-2.94,11.01-1.96,3.39-4.82,6.08-8.61,8.1-3.78,2.01-8.27,3.02-13.46,3.02-4.92,0-9.36-.88-13.31-2.65Z"/>
        <path fill={textColor} d="M616.68,274c-1.48-3.1-3.51-5.47-6.1-7.09-2.59-1.62-5.61-2.43-9.06-2.43-3.83,0-7.21.99-10.17,2.96-2.96,1.98-5.27,4.8-6.94,8.47-1.66,3.67-2.5,7.9-2.5,12.7s.85,9.24,2.55,12.91c1.7,3.67,4.05,6.5,7.07,8.47,3.02,1.98,6.53,2.96,10.54,2.96,4.93,0,8.97-1.5,12.11-4.5,3.15-3,5.21-7.18,6.2-12.54h-22.2v-11.32h34.96v12.91c-.87,5.15-2.72,9.92-5.55,14.29-2.84,4.37-6.49,7.88-10.96,10.53s-9.48,3.97-15.03,3.97c-6.23,0-11.85-1.6-16.88-4.81-5.03-3.21-8.97-7.68-11.84-13.39-2.86-5.72-4.3-12.21-4.3-19.47s1.44-13.78,4.3-19.53c2.86-5.75,6.81-10.23,11.84-13.44,5.02-3.21,10.62-4.81,16.78-4.81,7.27,0,13.59,2.03,18.95,6.08s9.06,9.76,11.1,17.09h-14.89Z"/>
      </g>
      <g>
        <path fill={textColor} d="M357.03,346.79v16.97h-2.27v-12.66l-5.72,12.66h-1.59l-5.75-12.68v12.68h-2.26v-16.97h2.44l6.37,14.03,6.37-14.03h2.42Z"/>
        <path fill={textColor} d="M360.86,353.38c.56-1.04,1.34-1.84,2.33-2.41.99-.57,2.08-.86,3.3-.86s2.23.26,3.11.76c.88.51,1.54,1.15,1.97,1.91v-2.45h2.29v13.44h-2.29v-2.5c-.45.79-1.12,1.44-2,1.95s-1.92.78-3.1.78-2.31-.3-3.29-.89c-.98-.58-1.75-1.41-2.31-2.48-.56-1.06-.85-2.27-.85-3.63s.29-2.58.85-3.62ZM370.94,354.37c-.41-.75-.97-1.33-1.68-1.73-.71-.4-1.48-.6-2.33-.6s-1.62.2-2.32.58c-.7.39-1.25.97-1.67,1.72-.41.75-.62,1.64-.62,2.65s.21,1.92.62,2.68.97,1.34,1.67,1.74c.7.4,1.47.6,2.32.6s1.62-.2,2.33-.6c.71-.4,1.27-.98,1.68-1.74s.62-1.65.62-2.66-.21-1.9-.62-2.65Z"/>
        <path fill={textColor} d="M379.96,345.62v18.15h-2.26v-18.15h2.26Z"/>
        <path fill={textColor} d="M383.82,353.38c.56-1.04,1.34-1.84,2.33-2.41.99-.57,2.08-.86,3.3-.86s2.23.26,3.11.76c.88.51,1.54,1.15,1.97,1.91v-2.45h2.29v13.44h-2.29v-2.5c-.45.79-1.12,1.44-2,1.95s-1.92.78-3.1.78-2.31-.3-3.29-.89c-.98-.58-1.75-1.41-2.31-2.48-.56-1.06-.85-2.27-.85-3.63s.29-2.58.85-3.62ZM393.9,354.37c-.41-.75-.97-1.33-1.68-1.73-.71-.4-1.48-.6-2.33-.6s-1.62.2-2.32.58c-.7.39-1.25.97-1.67,1.72-.41.75-.62,1.64-.62,2.65s.21,1.92.62,2.68.97,1.34,1.67,1.74c.7.4,1.47.6,2.32.6s1.62-.2,2.33-.6c.71-.4,1.27-.98,1.68-1.74s.62-1.65.62-2.66-.21-1.9-.62-2.65Z"/>
        <path fill={textColor} d="M412.4,350.33l-8.22,19.76h-2.34l2.69-6.47-5.51-13.29h2.51l4.28,10.89,4.24-10.89h2.34Z"/>
        <path fill={textColor} d="M416.68,363.46c-.83-.35-1.48-.84-1.97-1.47-.48-.63-.74-1.36-.8-2.17h2.34c.06.67.38,1.22.96,1.64s1.32.64,2.25.64c.86,0,1.54-.19,2.04-.56s.75-.85.75-1.42-.27-1.03-.8-1.31-1.36-.57-2.47-.85c-1.02-.27-1.84-.53-2.48-.8-.64-.27-1.19-.67-1.64-1.2-.46-.53-.69-1.23-.69-2.1,0-.69.21-1.31.62-1.89s1-1.03,1.76-1.36c.77-.33,1.64-.5,2.62-.5,1.51,0,2.73.38,3.66,1.13.93.75,1.43,1.79,1.49,3.09h-2.26c-.05-.7-.33-1.27-.86-1.7-.52-.43-1.22-.64-2.1-.64-.81,0-1.46.18-1.94.52-.48.35-.72.8-.72,1.35,0,.44.14.81.44,1.09.29.29.65.52,1.09.69.44.17,1.05.36,1.83.57.98.26,1.78.52,2.39.77.62.26,1.14.64,1.58,1.14.44.5.66,1.17.68,1.99,0,.73-.21,1.4-.62,1.98-.41.59-1,1.05-1.75,1.39s-1.62.5-2.6.5c-1.05,0-1.99-.18-2.82-.53Z"/>
        <path fill={textColor} d="M427.74,347.7c-.3-.29-.45-.65-.45-1.08s.15-.79.45-1.08.66-.44,1.09-.44.77.15,1.06.44.44.65.44,1.08-.14.79-.44,1.08-.64.44-1.06.44-.8-.15-1.09-.44ZM429.93,350.33v13.44h-2.26v-13.44h2.26Z"/>
        <path fill={textColor} d="M433.79,353.38c.56-1.04,1.34-1.84,2.33-2.41.99-.57,2.08-.86,3.3-.86s2.23.26,3.11.76c.88.51,1.54,1.15,1.97,1.91v-2.45h2.29v13.44h-2.29v-2.5c-.45.79-1.12,1.44-2,1.95s-1.92.78-3.1.78-2.31-.3-3.29-.89c-.98-.58-1.75-1.41-2.31-2.48-.56-1.06-.85-2.27-.85-3.63s.29-2.58.85-3.62ZM443.88,354.37c-.41-.75-.97-1.33-1.68-1.73-.71-.4-1.48-.6-2.33-.6s-1.62.2-2.32.58c-.7.39-1.25.97-1.67,1.72-.41.75-.62,1.64-.62,2.65s.21,1.92.62,2.68.97,1.34,1.67,1.74c.7.4,1.47.6,2.32.6s1.62-.2,2.33-.6c.71-.4,1.27-.98,1.68-1.74s.62-1.65.62-2.66-.21-1.9-.62-2.65Z"/>
        <path fill={textColor} d="M459.54,346.67v17.09h-2.26v-17.09h2.26Z"/>
        <path fill={textColor} d="M474.08,351.57c1.03.99,1.55,2.41,1.55,4.28v7.92h-2.24v-7.6c0-1.34-.34-2.37-1.02-3.08s-1.61-1.07-2.79-1.07-2.15.37-2.85,1.11c-.71.73-1.06,1.81-1.06,3.21v7.43h-2.26v-13.44h2.26v1.91c.45-.69,1.06-1.22,1.83-1.59.78-.38,1.63-.56,2.56-.56,1.66,0,3,.49,4.03,1.48Z"/>
        <path fill={textColor} d="M481.35,363.46c-.83-.35-1.48-.84-1.97-1.47-.48-.63-.74-1.36-.8-2.17h2.34c.06.67.38,1.22.96,1.64s1.32.64,2.25.64c.86,0,1.54-.19,2.04-.56s.75-.85.75-1.42-.27-1.03-.8-1.31-1.36-.57-2.47-.85c-1.02-.27-1.84-.53-2.48-.8-.64-.27-1.19-.67-1.64-1.2-.46-.53-.69-1.23-.69-2.1,0-.69.21-1.31.62-1.89s1-1.03,1.76-1.36c.77-.33,1.64-.5,2.62-.5,1.51,0,2.73.38,3.66,1.13.93.75,1.43,1.79,1.49,3.09h-2.26c-.05-.7-.33-1.27-.86-1.7-.52-.43-1.22-.64-2.1-.64-.81,0-1.46.18-1.94.52-.48.35-.72.8-.72,1.35,0,.44.14.81.44,1.09.29.29.65.52,1.09.69.44.17,1.05.36,1.83.57.98.26,1.78.52,2.39.77.62.26,1.14.64,1.58,1.14.44.5.66,1.17.68,1.99,0,.73-.21,1.4-.62,1.98-.41.59-1,1.05-1.75,1.39s-1.62.5-2.6.5c-1.05,0-1.99-.18-2.82-.53Z"/>
        <path fill={textColor} d="M495.1,352.17v7.92c0,.65.14,1.12.42,1.39.28.27.78.4,1.47.4h1.67v1.89h-2.05c-1.26,0-2.21-.29-2.84-.86-.63-.57-.95-1.51-.95-2.82v-7.92h-1.76v-1.84h1.76v-3.39h2.27v3.39h3.56v1.84h-3.56Z"/>
        <path fill={textColor} d="M501.47,347.7c-.3-.29-.45-.65-.45-1.08s.15-.79.45-1.08.66-.44,1.09-.44.77.15,1.06.44.44.65.44,1.08-.14.79-.44,1.08-.64.44-1.06.44-.8-.15-1.09-.44ZM503.66,350.33v13.44h-2.26v-13.44h2.26Z"/>
        <path fill={textColor} d="M510.29,352.17v7.92c0,.65.14,1.12.42,1.39.28.27.78.4,1.47.4h1.67v1.89h-2.05c-1.26,0-2.21-.29-2.84-.86-.63-.57-.95-1.51-.95-2.82v-7.92h-1.76v-1.84h1.76v-3.39h2.27v3.39h3.56v1.84h-3.56Z"/>
        <path fill={textColor} d="M528.68,350.33v13.44h-2.26v-1.99c-.43.69-1.03,1.22-1.8,1.61-.78.39-1.63.58-2.56.58-1.06,0-2.01-.22-2.86-.65-.85-.44-1.51-1.08-2.01-1.95-.49-.87-.73-1.92-.73-3.16v-7.87h2.24v7.57c0,1.32.34,2.34,1.02,3.06s1.61,1.06,2.79,1.06,2.16-.37,2.86-1.1c.7-.74,1.05-1.81,1.05-3.22v-7.38h2.26Z"/>
        <path fill={textColor} d="M535.28,352.17v7.92c0,.65.14,1.12.42,1.39.28.27.78.4,1.47.4h1.67v1.89h-2.05c-1.26,0-2.21-.29-2.84-.86-.63-.57-.95-1.51-.95-2.82v-7.92h-1.76v-1.84h1.76v-3.39h2.27v3.39h3.56v1.84h-3.56Z"/>
        <path fill={textColor} d="M553.96,357.88h-10.91c.09,1.32.54,2.35,1.38,3.1s1.86,1.12,3.05,1.12c.98,0,1.8-.22,2.45-.68.66-.45,1.12-1.05,1.38-1.8h2.45c-.37,1.29-1.1,2.34-2.2,3.15s-2.46,1.22-4.08,1.22c-1.3,0-2.45-.29-3.48-.86-1.02-.57-1.82-1.39-2.4-2.44-.58-1.05-.87-2.27-.87-3.67s.29-2.6.85-3.65,1.36-1.86,2.38-2.42,2.2-.85,3.52-.85,2.44.28,3.43.83c1,.56,1.76,1.32,2.31,2.29.54.97.81,2.07.81,3.3,0,.43-.03.88-.07,1.35ZM551.12,353.87c-.38-.61-.9-1.08-1.56-1.4-.65-.32-1.38-.48-2.18-.48-1.14,0-2.12.36-2.92,1.08-.81.72-1.27,1.72-1.38,2.99h8.62c0-.85-.19-1.58-.57-2.2Z"/>
        <path fill={textColor} d="M566.15,363.13c-1.04-.57-1.85-1.39-2.44-2.44s-.89-2.27-.89-3.67.3-2.58.91-3.64c.61-1.05,1.44-1.87,2.48-2.43,1.04-.56,2.21-.85,3.51-.85s2.47.28,3.51.85c1.04.56,1.87,1.37,2.48,2.42s.91,2.26.91,3.65-.31,2.62-.94,3.67-1.47,1.87-2.52,2.44c-1.06.57-2.24.86-3.54.86s-2.43-.29-3.47-.86ZM571.91,361.46c.72-.37,1.29-.94,1.73-1.69s.66-1.67.66-2.75-.22-1.99-.65-2.74c-.43-.75-.99-1.31-1.69-1.68-.7-.37-1.46-.55-2.27-.55s-1.59.18-2.27.55c-.69.37-1.24.93-1.66,1.68-.41.75-.62,1.66-.62,2.74s.2,2.02.61,2.77c.4.75.95,1.31,1.63,1.68.68.37,1.42.55,2.24.55s1.58-.19,2.29-.56Z"/>
        <path fill={textColor} d="M585.16,352.17h-2.86v11.6h-2.27v-11.6h-1.76v-1.84h1.76v-.96c0-1.5.4-2.6,1.19-3.3.79-.69,2.05-1.04,3.8-1.04v1.87c-.99,0-1.7.19-2.1.57-.4.39-.61,1.02-.61,1.9v.96h2.86v1.84Z"/>
        <path fill={textColor} d="M596.71,348.49v5.71h6.33v1.84h-6.33v5.88h7.07v1.84h-9.33v-17.12h9.33v1.84h-7.07Z"/>
        <path fill={textColor} d="M609.65,363.34c-.9-.4-1.61-.96-2.13-1.66-.52-.71-.78-1.54-.8-2.47h2.41c.09.8.42,1.47,1.01,2.02.59.55,1.45.82,2.58.82s1.93-.27,2.55-.8.94-1.21.94-2.05c0-.65-.19-1.19-.55-1.59-.37-.41-.82-.72-1.37-.93s-1.29-.44-2.22-.69c-1.14-.29-2.06-.58-2.75-.88-.69-.29-1.28-.75-1.77-1.38-.49-.63-.73-1.48-.73-2.54,0-.93.24-1.75.72-2.48.48-.72,1.15-1.28,2.03-1.67.87-.39,1.88-.58,3-.58,1.63,0,2.96.4,4,1.2s1.62,1.86,1.75,3.19h-2.49c-.09-.65-.44-1.23-1.05-1.73-.62-.49-1.43-.74-2.44-.74-.95,0-1.72.24-2.32.72-.6.48-.9,1.15-.9,2.02,0,.62.18,1.13.54,1.52.36.39.8.69,1.32.9.53.2,1.26.44,2.21.7,1.15.31,2.07.62,2.76.92s1.3.77,1.79,1.4c.5.63.75,1.48.75,2.56,0,.83-.22,1.62-.68,2.35-.45.74-1.11,1.33-1.99,1.79-.88.46-1.92.69-3.11.69s-2.17-.2-3.08-.6Z"/>
        <path fill={textColor} d="M634.98,351.63c-.48-.99-1.18-1.77-2.09-2.32-.91-.55-1.98-.82-3.19-.82s-2.3.27-3.27.82-1.73,1.33-2.29,2.35-.83,2.21-.83,3.55.28,2.52.83,3.53c.56,1.02,1.32,1.8,2.29,2.34s2.06.82,3.27.82c1.7,0,3.09-.49,4.18-1.49s1.73-2.34,1.92-4.04h-6.93v-1.82h9.34v1.72c-.13,1.41-.58,2.69-1.34,3.86-.76,1.17-1.76,2.09-3.01,2.77-1.24.68-2.63,1.02-4.16,1.02-1.61,0-3.08-.37-4.41-1.12s-2.38-1.78-3.15-3.1c-.77-1.32-1.16-2.82-1.16-4.49s.39-3.17,1.16-4.5c.78-1.33,1.82-2.37,3.15-3.11s2.8-1.12,4.41-1.12c1.84,0,3.48.45,4.9,1.35s2.45,2.17,3.1,3.8h-2.72Z"/>
      </g>
      <g>
        <path fill="#4f9743" d="M228.37,371.11c-5.21,5.1-10.94,9.06-17.74,11.3-2.87.94-5.34-.46-6.51-3.56-1.08-2.87-.24-4.85,2.68-6.02,17.96-7.21,29.06-20.67,35.17-38.64,3.15-9.26,4.87-18.92,7.67-28.28,4.02-13.45,9.82-26.06,17.31-37.91,4.58-7.25,9.44-14.31,15.07-20.8.26-.3.46-.67,1.12-1.67-3.28,1.73-5.4,3.71-7.57,5.6-13.31,11.61-22.07,26.28-28.59,42.47-4.32,10.71-7.43,21.75-9.36,33.13-.02.14-.19.26-.47.62-.84-4.72-1.3-9.31-2.43-13.77-1.49-5.86-3.06-11.72-4.23-17.65-3.53-17.84-.46-34.19,11.19-48.59,8.94-11.05,20.47-18.5,33.12-24.51,10.96-5.21,22.5-8.35,34.46-10.15,2.39-.36,3.39.15,4.04,2.78,2.66,10.78,3.44,21.7,2.86,32.71-.62,11.55-2.92,22.82-7.45,33.52-4.4,10.39-12.31,17.63-21.64,23.53-7.62,4.82-15.74,8.72-23.65,13.02-7.36,3.99-12.42,10.07-15.44,17.9-3.14,8.15-6,16.44-10.79,23.85-2.54,3.93-5.23,7.76-8.8,11.12Z"/>
        <path fill="#306eaf" d="M241.08,372.01c-1.22-.25-2.22-.49-3.34-.75.13-.42.15-.8.34-1.02,5.8-6.88,10.07-14.65,13.86-22.79,6.18-13.3,17.03-21.74,29.98-27.92,10.7-5.11,20.75-11.18,28.29-20.67,2.21-2.78,3.96-5.85,5.9-8.99,1.51,1.32,1.34,3.07,1.71,4.58,1.9,7.75,3.25,15.62,2.83,23.6-1.05,19.71-8.61,36.05-25.71,46.99-8.9,5.69-18.92,7.93-29.33,8.52-8.15.47-16.24-.38-24.51-1.55Z"/>
      </g>
    </svg>
  );
};

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Pillars', href: '#pillars' },
    { name: 'Team', href: '#team' },
    { name: 'Resources', href: '#resources' },
  ];

  // Logic to highlight the President as requested
  const featuredMember = TEAM_MEMBERS.find(m => m.role === 'President');
  const otherMembers = TEAM_MEMBERS.filter(m => m.role !== 'President');

  return (
    <div className="min-h-screen selection:bg-[#1a2e28] selection:text-white overflow-x-hidden bg-white font-['Inter']">
      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center">
            <div className={`px-4 py-3 rounded-[1.2rem] transition-all duration-500 flex items-center justify-center ${!isScrolled ? 'bg-white/70 backdrop-blur-md shadow-2xl' : 'bg-transparent'}`}>
              <Logo className="h-20 md:h-24" />
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-sm font-bold uppercase tracking-widest transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-current after:transition-all hover:after:w-full ${isScrolled ? 'text-slate-600 hover:text-[#1a2e28]' : 'text-white/90 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="bg-[#1a2e28] text-white px-7 py-3 rounded-full text-sm font-black uppercase tracking-widest hover:bg-[#2d5a27] transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Connect
            </a>
          </nav>

          <button className="lg:hidden p-2 text-current focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-[#1a2e28]' : 'text-white'} size={32} />
            ) : (
              <Menu className={isScrolled ? 'text-[#1a2e28]' : 'text-white'} size={32} />
            )}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center p-8 space-y-8 animate-in fade-in slide-in-from-top duration-300">
            <button className="absolute top-6 right-6 p-2 text-[#1a2e28]" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={40} />
            </button>
            <Logo className="h-32 mb-12" />
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-4xl font-black text-[#1a2e28] uppercase tracking-tighter"
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="mt-8 bg-[#1a2e28] text-white w-full max-w-xs p-6 rounded-2xl text-center font-black uppercase tracking-widest text-xl shadow-2xl"
              onClick={(e) => scrollToSection(e, '#contact')}
            >
              Connect
            </a>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 lg:pt-40">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000" 
              alt="Rainforest Background" 
              className="w-full h-full object-cover scale-110"
            />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a2e28]/40 via-transparent to-[#1a2e28]/60"></div>
          </div>
          <div className="container mx-auto px-6 z-10 text-center">
            <div className="max-w-5xl mx-auto flex flex-col items-center space-y-12">
              
              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] drop-shadow-2xl">
                National <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400">ESG</span> <br className="hidden md:block" />
                Centre of Excellence
              </h1>

              <p className="text-white/80 text-lg md:text-2xl font-medium tracking-wide max-w-2xl mx-auto leading-relaxed px-4">
                Advancing Malaysia’s sustainability transition through rigorous research, professional certification, and strategic policy.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 pt-6 w-full sm:w-auto">
                <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="w-full sm:w-auto bg-white text-[#1a2e28] px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-green-50 transition-all shadow-2xl flex items-center justify-center gap-2 group transform hover:-translate-y-1">
                  Our Mission <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#resources" onClick={(e) => scrollToSection(e, '#resources')} className="w-full sm:w-auto bg-transparent text-white border-2 border-white/30 px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all text-center backdrop-blur-sm">
                  Publications
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 md:py-32 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
              <div className="w-full lg:w-1/2 relative">
                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.12)]">
                  <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800" className="w-full h-auto aspect-[4/5] object-cover" alt="MiESG Vision" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e28]/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-2xl rounded-[2rem] border border-white/20 text-center md:text-left">
                     <p className="text-white text-3xl font-black mb-1 italic leading-tight">"Driving the regional ESG transition."</p>
                     <p className="text-white/70 text-xs font-black uppercase tracking-[0.3em]">MiESG Institutional Mandate</p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-12">
                <div>
                  <span className="text-green-600 font-black tracking-[0.4em] uppercase text-xs mb-4 block text-center lg:text-left">Institutional Profile</span>
                  <h2 className="text-5xl md:text-8xl font-black text-[#1a2e28] leading-[0.85] tracking-tighter mb-10 text-center lg:text-left">
                    Redefining <br/> <span className="text-slate-300 italic">Excellence.</span>
                  </h2>
                  <div className="space-y-8 text-slate-600 text-lg md:text-2xl leading-relaxed font-medium text-center lg:text-left">
                    <p>Establishing Malaysia as a regional leader in ESG by integrating elite research, professional education, and industry-standard certification.</p>
                    <p>We empower institutions to pivot from traditional operation to ESG-centric models that resonate on the global stage.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                  <div className="group p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#1a2e28] mb-6 group-hover:bg-[#1a2e28] group-hover:text-white transition-all shadow-sm mx-auto lg:mx-0"><Globe size={28}/></div>
                    <h4 className="text-2xl font-black text-[#1a2e28] mb-3 tracking-tight text-center lg:text-left">Regional Impact</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium text-center lg:text-left">Setting cross-border sustainability benchmarks for SE Asia.</p>
                  </div>
                  <div className="group p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#1a2e28] mb-6 group-hover:bg-[#1a2e28] group-hover:text-white transition-all shadow-sm mx-auto lg:mx-0"><Users size={28}/></div>
                    <h4 className="text-2xl font-black text-[#1a2e28] mb-3 tracking-tight text-center lg:text-left">Supply Talent</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium text-center lg:text-left">Providing specialized ESG literacy for boards and public agencies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section id="pillars" className="py-24 md:py-32 bg-[#1a2e28] text-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mb-24 text-center md:text-left mx-auto md:mx-0">
              <span className="text-green-400 font-black tracking-[0.4em] uppercase text-xs mb-4 block">Our DNA</span>
              <h2 className="text-5xl md:text-8xl font-black mb-10 leading-none tracking-tighter">Strategic Pillars.</h2>
              <p className="text-white/50 text-xl md:text-2xl font-medium leading-relaxed">Defining the infrastructure of Malaysia’s sustainable future through four core mandates.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {PILLARS.map(p => (
                <div key={p.id} className="group bg-white/[0.03] border border-white/10 rounded-[3.5rem] p-10 flex flex-col transition-all hover:bg-white/[0.07] hover:-translate-y-3 duration-500">
                  <div className="h-44 rounded-3xl overflow-hidden mb-12 border border-white/5 shadow-inner">
                    <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" alt={p.title}/>
                  </div>
                  <div className="flex-1">
                    <span className="text-green-400 font-black text-[10px] uppercase tracking-[0.5em] mb-4 block text-center sm:text-left">Pillar 0{p.id}</span>
                    <h3 className="text-2xl md:text-3xl font-black mb-6 leading-tight group-hover:text-green-400 transition-colors tracking-tight text-center sm:text-left">{p.title}</h3>
                    <ul className="space-y-5 mt-10 border-t border-white/5 pt-10">
                      {p.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-5 text-[15px] text-white/50 font-medium">
                          <div className="mt-2 w-2 h-2 rounded-full bg-green-500 shrink-0 shadow-[0_0_15px_rgba(34,197,94,0.6)]"></div>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24 md:py-32 bg-slate-50 border-y border-slate-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <span className="text-green-600 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Leadership</span>
              <h2 className="text-4xl md:text-7xl font-black text-[#1a2e28] mb-8 tracking-tighter leading-none text-center">Institutional Leadership.</h2>
              <p className="text-slate-500 text-lg md:text-xl font-medium text-center">Our board consists of recognized experts at the intersection of public policy and private governance.</p>
            </div>
            
            {featuredMember && (
              <div className="max-w-4xl mx-auto mb-20">
                 <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 flex flex-col md:flex-row group transition-all duration-700 hover:shadow-green-900/10">
                    <div className="w-full md:w-2/5 h-96 md:h-auto overflow-hidden relative">
                       <img src={featuredMember.image} alt={featuredMember.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                       <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e28]/20 to-transparent"></div>
                    </div>
                    <div className="p-10 md:p-16 flex-1 flex flex-col justify-center">
                       <span className="text-green-600 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Institutional Leadership</span>
                       <h3 className="text-4xl md:text-5xl font-black text-[#1a2e28] mb-2 tracking-tight">{featuredMember.name}</h3>
                       <p className="text-green-600 font-black text-lg uppercase mb-6 tracking-widest">{featuredMember.role}</p>
                       <p className="text-slate-500 text-lg leading-relaxed italic mb-8">"{featuredMember.bio}"</p>
                       <div className="flex items-center gap-4">
                          <a href="#" className="flex items-center justify-center w-12 h-12 bg-slate-100 rounded-xl text-[#1a2e28] hover:bg-[#1a2e28] hover:text-white transition-all shadow-sm"><Linkedin size={20}/></a>
                          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Professional Profile</span>
                       </div>
                    </div>
                 </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {otherMembers.map((member, i) => (
                <div key={i} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-slate-100 flex flex-col">
                  <div className="relative h-80 overflow-hidden shrink-0">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e28]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                        <a href="#" className="w-full bg-white text-[#1a2e28] py-4 rounded-2xl font-black uppercase text-xs flex items-center justify-center gap-2 shadow-xl tracking-widest">
                            <Linkedin size={18} /> Profile
                        </a>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col text-center sm:text-left">
                    <span className="text-green-600 font-black text-[10px] uppercase tracking-[0.2em] mb-2 block">{member.specialty}</span>
                    <h3 className="text-2xl font-black text-[#1a2e28] leading-tight mb-2">{member.name}</h3>
                    <p className="text-slate-400 font-bold text-[10px] uppercase mb-4 tracking-wider">{member.role}</p>
                    <p className="text-slate-500 text-sm leading-relaxed italic line-clamp-3">"{member.bio}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="py-24 md:py-32 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-16 text-center md:text-left mx-auto">
              <span className="text-green-600 font-black tracking-[0.3em] uppercase text-xs mb-4 block text-center">Knowledge Hub</span>
              <h2 className="text-4xl md:text-7xl font-black text-[#1a2e28] leading-none tracking-tighter mb-8 text-center">Publications.</h2>
              <p className="text-slate-500 text-lg md:text-xl font-medium text-center">Access peer-reviewed research, policy frameworks, and academic journals driving the national ESG agenda.</p>
            </div>

            <div className="bg-slate-50 rounded-[4rem] p-12 md:p-24 border border-slate-100 flex flex-col items-center justify-center text-center space-y-8 relative overflow-hidden group max-w-5xl mx-auto">
               <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 blur-[100px] rounded-full group-hover:bg-green-500/10 transition-colors duration-1000"></div>
               <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-[#1a2e28] shadow-xl">
                  <Clock size={48} className="animate-pulse" />
               </div>
               <div className="space-y-4 max-w-xl">
                  <h3 className="text-3xl md:text-5xl font-black text-[#1a2e28] tracking-tight">Content Available Soon</h3>
               </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="bg-[#1a2e28] rounded-[4rem] shadow-2xl overflow-hidden relative p-12 md:p-24 text-center max-w-5xl mx-auto">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500/10 to-transparent"></div>
              <div className="relative z-10 space-y-12">
                <span className="text-green-400 font-black tracking-[0.4em] uppercase text-xs block">Contact MiESG</span>
                <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">Let's Connect.</h2>
                <p className="text-white/60 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
                  Join us in shaping the sustainable future of Southeast Asia. For all institutional inquiries and partnership requests, please contact us directly via email.
                </p>
                <div className="pt-8">
                  <a 
                    href="mailto:enquiry.miesg@gmail.com" 
                    className="inline-flex flex-col md:flex-row items-center gap-4 bg-white text-[#1a2e28] px-10 py-6 rounded-3xl font-black text-2xl md:text-3xl hover:bg-green-50 transition-all shadow-2xl transform hover:-translate-y-1 group"
                  >
                    <Mail size={32} className="text-green-600 group-hover:scale-110 transition-transform" />
                    enquiry.miesg@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
           <div className="flex flex-col items-center gap-6 mb-12">
              <Logo className="h-16" />
              <div className="w-24 h-1 bg-[#1a2e28] rounded-full opacity-10"></div>
           </div>
           <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">© 2026 Malaysia Institute of ESG. All rights reserved.</p>
        </div>
      </footer>

      <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="fixed bottom-10 right-10 w-16 h-16 bg-[#1a2e28] text-white rounded-full flex items-center justify-center shadow-2xl hover:-translate-y-2 transition-all z-40 active:scale-90">
        <ChevronUp size={32} />
      </button>
    </div>
  );
};

export default App;