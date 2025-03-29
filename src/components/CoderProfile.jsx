import React, { useState, useEffect, useRef } from "react";

const coder = {
    name: 'Rajat P Rao',
    skills: [
        'React.js', 'Node.js', 'Express.js',
        'MongoDB', 'JS', 'Tailwind CSS',
        'REST APIs', 'Mongoose', 'npm/yarn', 'Git'
    ], // Shortened skill names for brevity
    isMERNStackDev: true,
    usesTailwindCSS: true,
    hireable: function() {
        return (this.isMERNStackDev && this.usesTailwindCSS && this.skills.length >= 5);
    }
};

const CoderProfile = () => {
    const [terminalOutput, setTerminalOutput] = useState([]);
    const [currentLine, setCurrentLine] = useState("");
    const [outputIndex, setOutputIndex] = useState(0);
    const terminalBodyRef = useRef(null);

    useEffect(() => {
        const linesToOutput = [
            `>`,
            `const mernDev = {`,
            `  name: '${coder.name}',`,
            `  stack: 'MERN',`,
            `  skills: [`,
            ...coder.skills.map(skill => `    '${skill}',`),
            `  ],`,
            `  // MERN & Tailwind Expert`,
            `  isMERNStackDev: true,`,
            `  usesTailwindCSS: true,`,
            `};`,
            `>`,
            `// Hireability Check:`,
            `>`,
            `function isReadyForMERNJobs(dev) {`,
            `  return (`, // Broke down the return statement
            `    dev.isMERNStackDev &&`,
            `    dev.usesTailwindCSS &&`,
            `    dev.skills.length >= 6`,
            `  );`,
            `}`,
            `>`,
            `console.log(`, // Broke down console.log arguments
            `  isReadyForMERNJobs(mernDev) ?`,
            `  '🔥 MERN Stack Ready!' :`,
            `  '🤔 Honing MERN Skills...'`,
            `);`,
            `🔥 MERN Stack Ready!`,
            `>`,
        ];

        if (outputIndex < linesToOutput.length) {
            const typingInterval = setInterval(() => {
                if (outputIndex < linesToOutput.length) {
                    const line = linesToOutput[outputIndex];
                    if (currentLine.length < line.length) {
                        setCurrentLine(line.slice(0, currentLine.length + 1));
                    } else {
                        setTerminalOutput(prevOutput => [...prevOutput, currentLine]);
                        setCurrentLine("");
                        setOutputIndex(outputIndex + 1);
                    }
                } else {
                    clearInterval(typingInterval);
                }
            }, 20);

            return () => clearInterval(typingInterval);
        }
    }, [outputIndex, currentLine]);

    useEffect(() => {
        if (terminalBodyRef.current) {
            terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
        }
    }, [terminalOutput]);

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
                className="overflow-x-auto border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 max-h-[400px] overflow-y-scroll"
            >
                <div className="font-mono text-xs md:text-sm lg:text-base text-green-300">
                    {terminalOutput.map((line, index) => (
                        <div key={index} className="whitespace-pre">{line}</div>
                    ))}
                    <div className="whitespace-pre blink">{currentLine}<span className="inline-block w-1 bg-green-300 align-middle ml-1"></span></div>
                </div>
            </div>
        </div>
    );
};

export default CoderProfile;