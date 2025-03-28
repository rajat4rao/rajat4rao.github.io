import React, { useState, useEffect, useRef } from "react";

// Define the coder object outside the component
const coder = {
    name: 'Rajat P Rao',
    webSkills: [
        'React.js', 'Node.js', 'Express.js',
        'MongoDB', 'JS', 'Tailwind CSS',
        'REST APIs', 'Mongoose', 'Git'
    ],
    dataScienceSkills: [
        'Python', 'Pandas', 'NumPy',
        'Scikit-learn', 'Machine Learning',
        'Data Analysis', 'Feature Eng.',
        'Tableau',
        'Plotly', 'Seaborn',
        'Demand Forecasting',
        'SQL', // Added SQL as it's often fundamental
        'Data Visualization',
        'Supply Chain Opt.'
    ],
    isMERNStackDev: true,
    knowsDataScience: true,
    usesTailwindCSS: true,
    // Simplified hireable function - not directly used in the animation logic
    hireable: function() {
        return (this.webSkills.length >= 5 && this.dataScienceSkills.length >= 5);
    }
};

// Define the complete lines to output *outside* the component for clarity
// This ensures it's defined once and references the coder object correctly
const fullLinesToOutput = [
    `>`,
    `const developerProfile = {`,
    `  name: '${coder.name}',`,
    `  roles: ['Web Developer', 'Data Analyst'],`, // Added roles
    `  webSkills: [`,
    ...coder.webSkills.map(skill => `    '${skill}',`),
    `  ],`,
    `  dataScienceSkills: [`, // Added Data Science skills section
    ...coder.dataScienceSkills.map(skill => `    '${skill}',`),
    `  ],`,
    `  // Proficient in MERN Stack & Data Science Tools`,
    `  isMERNStackDev: ${coder.isMERNStackDev},`,
    `  knowsDataScience: ${coder.knowsDataScience},`,
    `  usesTailwindCSS: ${coder.usesTailwindCSS},`,
    `};`,
    `>`,
    `// Versatility Check:`,
    `>`,
    `function isReadyForHybridRoles(dev) {`,
    `  return (`,
    `    (dev.isMERNStackDev || dev.webSkills.length >= 5) &&`,
    `    dev.knowsDataScience &&`,
    `    dev.dataScienceSkills.length >= 8`, // Adjusted threshold
    `  );`,
    `}`,
    `>`,
    `console.log(`,
    `  isReadyForHybridRoles(developerProfile) ?`,
    `  '🚀 Ready for Full-Stack & Data Roles!' :`, // Updated message
    `  '📚 Expanding Skillset...'`,
    `);`,
    `🚀 Ready for Full-Stack & Data Roles!`, // Updated final output
    `>`,
];


const CoderProfile = () => {
    const [terminalOutput, setTerminalOutput] = useState([]);
    const [currentLine, setCurrentLine] = useState("");
    const [outputIndex, setOutputIndex] = useState(0);
    const terminalBodyRef = useRef(null);

    useEffect(() => {
        // Use the predefined fullLinesToOutput array
        const linesToOutput = fullLinesToOutput;

        // Check if we still have lines to process
        if (outputIndex < linesToOutput.length) {
            const typingInterval = setInterval(() => {
                // Double-check index boundary within interval
                if (outputIndex < linesToOutput.length) {
                    const line = linesToOutput[outputIndex];
                    if (currentLine.length < line.length) {
                        // Type next character
                        setCurrentLine(line.slice(0, currentLine.length + 1));
                    } else {
                        // Line finished typing, add to output and move to next line
                        setTerminalOutput(prevOutput => [...prevOutput, currentLine]);
                        setCurrentLine(""); // Reset current line for typing the next one
                        setOutputIndex(prevIndex => prevIndex + 1); // Go to next line index
                    }
                } else {
                     // Should not happen if initial check is correct, but good for safety
                    clearInterval(typingInterval);
                }
            }, 40); // Slightly adjusted speed if needed

            // Cleanup function to clear interval if component unmounts or dependencies change
            return () => clearInterval(typingInterval);
        }
        // If outputIndex reaches the end, the effect does nothing further until reset/remount

    // Dependencies: Effect runs when outputIndex changes (to process the next line)
    // or when currentLine changes (while typing). Including linesToOutput isn't necessary
    // if defined outside, but harmless if defined inside. Crucially, we need outputIndex.
    }, [outputIndex, currentLine]); // Keep dependencies as needed for the logic flow


    // Effect for scrolling the terminal view
    useEffect(() => {
        if (terminalBodyRef.current) {
            terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
        }
    }, [terminalOutput]); // Scroll whenever the output array changes


    return (
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] shadow-lg">
            {/* Top Gradient Borders */}
            <div className="flex flex-row">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
            </div>

            {/* Header with Code Editor Buttons */}
            <div className="px-4 lg:px-8 py-5">
                <div className="flex flex-row space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
            </div>

            {/* Scrollable Terminal Body */}
            <div
                ref={terminalBodyRef}
                className="overflow-x-auto border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 max-h-[450px] overflow-y-scroll" // Increased max-height slightly
            >
                <div className="font-mono text-xs md:text-sm lg:text-base text-green-300">
                    {/* Display fully typed lines */}
                    {terminalOutput.map((line, index) => (
                        <div key={index} className="whitespace-pre">{line}</div>
                    ))}
                    {/* Display currently typing line with blinking cursor if not finished */}
                    {outputIndex < fullLinesToOutput.length && (
                        <div className="whitespace-pre blink">
                            {currentLine}
                            <span className="inline-block w-1 h-4 bg-green-300 align-middle ml-1 animate-blink"></span> {/* Simple CSS blink animation can be added */}
                        </div>
                    )}
                </div>
            </div>
            {/* Add CSS for blink animation if needed:
                @keyframes blink { 50% { opacity: 0; } }
                .animate-blink { animation: blink 1s step-end infinite; }
            */}
        </div>
    );
};

export default CoderProfile;