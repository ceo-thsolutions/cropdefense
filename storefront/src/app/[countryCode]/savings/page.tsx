"use client"

import React, { useState, useEffect, useRef } from "react"
import "../../../styles/savings-page.css"
import Script from "next/script"

export default function SavingsPage() {
    // State for crops
    const [crops, setCrops] = useState([{ id: 0 }])
    const [cropCount, setCropCount] = useState(1)

    // State for agent mode
    const [agentMode, setAgentMode] = useState(false)
    const [currentAgent, setCurrentAgent] = useState<any>(null)

    // State for calculation results
    const [calculatedData, setCalculatedData] = useState<any>(null)
    const [showResults, setShowResults] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [isGenerating, setIsGenerating] = useState(false)

    // Form refs
    const formRef = useRef<HTMLFormElement>(null)
    const totalAcreageRef = useRef<HTMLInputElement>(null)
    const salesRepSelectRef = useRef<HTMLInputElement>(null)
    const repEmailInputRef = useRef<HTMLInputElement>(null)
    const agentCodeInputRef = useRef<HTMLInputElement>(null)

    // Constants
    const FERTILIZER_REDUCTION = 0.50
    const YIELD_INCREASE_LOW = 0.03
    const YIELD_INCREASE_HIGH = 0.70

    // Mock Agent Database
    const AGENT_CODES: Record<string, { id: string; name: string; email: string }> = {
        'CD-SMITH': { id: 'rep_jsmith', name: 'John Smith', email: 'jsmith@cropdefense.com' },
        'CD-JSMITH': { id: 'rep_jsmith', name: 'John Smith', email: 'jsmith@cropdefense.com' },
        'CD-JOHNSON': { id: 'rep_mjohnson', name: 'Maria Johnson', email: 'mjohnson@cropdefense.com' },
        'CD-MJOHNSON': { id: 'rep_mjohnson', name: 'Maria Johnson', email: 'mjohnson@cropdefense.com' },
        'CD-WILLIAMS': { id: 'rep_dwilliams', name: 'David Williams', email: 'dwilliams@cropdefense.com' },
        'CD-DWILLIAMS': { id: 'rep_dwilliams', name: 'David Williams', email: 'dwilliams@cropdefense.com' },
        'CD-BROWN': { id: 'rep_sbrown', name: 'Sarah Brown', email: 'sbrown@cropdefense.com' },
        'CD-SBROWN': { id: 'rep_sbrown', name: 'Sarah Brown', email: 'sbrown@cropdefense.com' },
        'CD-GARCIA': { id: 'rep_mgarcia', name: 'Miguel Garcia', email: 'mgarcia@cropdefense.com' },
        'CD-MGARCIA': { id: 'rep_mgarcia', name: 'Miguel Garcia', email: 'mgarcia@cropdefense.com' },
    }

    useEffect(() => {
        // URL params handling
        const urlParams = new URLSearchParams(window.location.search)

        const agentCodeParam = urlParams.get('agent')
        if (agentCodeParam) {
            const code = agentCodeParam.toUpperCase()
            if (AGENT_CODES[code]) {
                activateAgentMode(AGENT_CODES[code])
            }
        }

        const preAssignedRep = urlParams.get('rep')
        if (preAssignedRep && AGENT_CODES['CD-' + preAssignedRep.replace('rep_', '').toUpperCase()]) {
            const agentEntry = Object.entries(AGENT_CODES).find(([code, agent]) => agent.id === preAssignedRep)
            if (agentEntry) {
                const agent = agentEntry[1]
                if (salesRepSelectRef.current) salesRepSelectRef.current.value = agent.id
                if (salesRepSelectRef.current) salesRepSelectRef.current.dataset.name = agent.name
                if (repEmailInputRef.current) repEmailInputRef.current.value = agent.email
            }
        }
    }, [])

    const activateAgentMode = (agent: any) => {
        setAgentMode(true)
        setCurrentAgent(agent)
        if (salesRepSelectRef.current) salesRepSelectRef.current.value = agent.id
        if (repEmailInputRef.current) repEmailInputRef.current.value = agent.email
    }

    const exitAgentMode = () => {
        setAgentMode(false)
        setCurrentAgent(null)
        if (salesRepSelectRef.current) salesRepSelectRef.current.value = ''
        if (repEmailInputRef.current) repEmailInputRef.current.value = ''
    }

    const addCrop = () => {
        setCrops([...crops, { id: cropCount }])
        setCropCount(cropCount + 1)
    }

    const removeCrop = (indexToRemove: number) => {
        setCrops(crops.filter((_, index) => index !== indexToRemove))
    }

    const updateTotalAcreage = () => {
        const acreageInputs = document.querySelectorAll('.crop-acreage') as NodeListOf<HTMLInputElement>
        let total = 0
        acreageInputs.forEach(input => {
            total += parseFloat(input.value) || 0
        })
        if (totalAcreageRef.current) totalAcreageRef.current.value = total.toString() || ''
    }

    const applyAgentCode = () => {
        const input = agentCodeInputRef.current
        if (!input) return

        const code = input.value.trim().toUpperCase()
        if (!code) return // Handle empty error

        if (AGENT_CODES[code]) {
            const agent = AGENT_CODES[code]
            if (salesRepSelectRef.current) {
                salesRepSelectRef.current.value = agent.id
                salesRepSelectRef.current.dataset.name = agent.name
            }
            if (repEmailInputRef.current) repEmailInputRef.current.value = agent.email

            // Show success UI (simplified for React)
            alert(`Agent code applied! Report will be sent to ${agent.name}`)
        } else {
            alert('Invalid agent code')
        }
    }

    const calculateSavings = () => {
        // Validation
        const form = formRef.current
        if (!form || !form.checkValidity()) {
            form?.reportValidity()
            return
        }

        const fertilizerCostInput = document.getElementById('fertilizerCost') as HTMLInputElement
        const fertilizerCostPerAcre = parseFloat(fertilizerCostInput.value) || 0
        const totalAcreage = parseFloat(totalAcreageRef.current?.value || '0')

        let totalCurrentRevenue = 0
        const cropsData: any[] = []

        // We need to gather data from the DOM because we didn't fully bind inputs to state 
        // (keeping close to original implementation for speed/compatibility)
        const cropEntries = document.querySelectorAll('.crop-entry')
        cropEntries.forEach((entry: any) => {
            const acreage = parseFloat(entry.querySelector('.crop-acreage').value) || 0
            const yieldPerAcre = parseFloat(entry.querySelector('.crop-yield').value) || 0
            const pricePerUnit = parseFloat(entry.querySelector('.crop-price').value) || 0
            const cropType = entry.querySelector('.crop-type').value
            const revenue = acreage * yieldPerAcre * pricePerUnit

            totalCurrentRevenue += revenue
            cropsData.push({
                type: cropType,
                acreage,
                yieldPerAcre,
                pricePerUnit,
                revenue
            })
        })

        // Calculations
        const totalFertilizerCost = totalAcreage * fertilizerCostPerAcre
        const fertilizerSavings = totalFertilizerCost * FERTILIZER_REDUCTION
        const revenueLow = totalCurrentRevenue * YIELD_INCREASE_LOW
        const revenueHigh = totalCurrentRevenue * YIELD_INCREASE_HIGH

        const profitIncreaseLow = totalCurrentRevenue ? ((fertilizerSavings + revenueLow) / totalCurrentRevenue * 100).toFixed(1) : "0"
        const profitIncreaseHigh = totalCurrentRevenue ? ((fertilizerSavings + revenueHigh) / totalCurrentRevenue * 100).toFixed(1) : "0"

        const data = {
            farmName: (document.getElementById('farmName') as HTMLInputElement).value,
            farmLocation: (document.getElementById('farmLocation') as HTMLInputElement).value,
            contactName: (document.getElementById('contactName') as HTMLInputElement).value,
            email: (document.getElementById('email') as HTMLInputElement).value,
            phone: (document.getElementById('phone') as HTMLInputElement).value,
            operationType: (document.getElementById('operationType') as HTMLInputElement).value,
            salesRepId: salesRepSelectRef.current?.value || '',
            salesRepName: salesRepSelectRef.current?.dataset.name || '',
            salesRepEmail: repEmailInputRef.current?.value || '',
            totalAcreage,
            fertilizerCostPerAcre,
            crops: cropsData,
            calculations: {
                totalCurrentRevenue,
                totalFertilizerCost,
                fertilizerSavings,
                revenueLow,
                revenueHigh,
                profitIncreaseLow,
                profitIncreaseHigh
            }
        }

        setCalculatedData(data)
        setShowResults(true)

        // Scroll to results
        setTimeout(() => {
            document.getElementById('resultsSection')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
    }

    const formatCurrency = (num: number) => {
        return '$' + num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
    }

    // --- PDF Generation Logic ---
    const generatePDFReport = async (data: any) => {
        // Dynamic import to avoid SSR issues
        const { jsPDF } = await import("jspdf")
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'pt',
            format: 'letter'
        });

        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const margin = 50;
        let y = 0;

        // Colors
        const brandGreen = [126, 195, 96]; // #7EC360
        const forest = [26, 46, 26];       // #1a2e1a
        const textDark = [26, 26, 26];
        const textGray = [100, 100, 100];

        // Header background
        doc.setFillColor(forest[0], forest[1], forest[2]);
        doc.rect(0, 0, pageWidth, 100, 'F');

        // Green accent bar
        doc.setFillColor(brandGreen[0], brandGreen[1], brandGreen[2]);
        doc.rect(0, 100, pageWidth, 6, 'F');

        // Logo
        try {
            const logoUrl = window.location.origin + '/logo.png';
            const logoImg = new Image();
            logoImg.src = logoUrl;
            await new Promise((resolve) => {
                logoImg.onload = resolve;
                logoImg.onerror = resolve; // Continue even if logo fails
            });

            // If loaded, add to PDF. Aspect ratio 300x70 approx based on typical logos, limiting height to 40
            if (logoImg.width > 0) {
                const logoHeight = 40;
                const logoWidth = (logoImg.width / logoImg.height) * logoHeight;
                doc.addImage(logoImg, 'PNG', margin, 35, logoWidth, logoHeight);
            } else {
                // Fallback text if image load fails
                doc.setFontSize(20);
                doc.setTextColor(255, 255, 255);
                doc.text('CropDefense', margin, 65);
            }
        } catch (e) {
            // Fallback
            doc.setFontSize(20);
            doc.setTextColor(255, 255, 255);
            doc.text('CropDefense', margin, 65);
        }

        // Title
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(22);
        doc.setFont('helvetica', 'bold');
        doc.text('CropDefense', margin + 55, 45);
        doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
        doc.text('Savings Report', margin + 175, 45);

        // Farm name subtitle
        doc.setTextColor(200, 220, 200);
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text(`Prepared for ${data.farmName}`, margin + 55, 65);

        // Date
        doc.setFontSize(10);
        doc.text(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }), margin + 55, 82);

        y = 140;

        // Executive Summary Box
        doc.setFillColor(244, 250, 240);
        doc.roundedRect(margin, y, pageWidth - (margin * 2), 80, 8, 8, 'F');
        doc.setDrawColor(brandGreen[0], brandGreen[1], brandGreen[2]);
        doc.setLineWidth(1.5);
        doc.roundedRect(margin, y, pageWidth - (margin * 2), 80, 8, 8, 'S');

        doc.setTextColor(forest[0], forest[1], forest[2]);
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('Executive Summary', margin + 15, y + 25);

        doc.setTextColor(textDark[0], textDark[1], textDark[2]);
        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        const summaryText = `Based on your farm data, adopting CropDefense could increase your overall profitability by approximately ${data.calculations.profitIncreaseLow}% to ${data.calculations.profitIncreaseHigh}% through reduced fertilizer costs and improved yields.`;
        const summaryLines = doc.splitTextToSize(summaryText, pageWidth - (margin * 2) - 30);
        doc.text(summaryLines, margin + 15, y + 45);

        y += 100;

        // Key Metrics Section
        doc.setTextColor(forest[0], forest[1], forest[2]);
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('Projected Savings', margin, y + 20);

        y += 35;

        // Three metric boxes
        const boxWidth = (pageWidth - (margin * 2) - 30) / 3;
        const metrics = [
            { label: 'Fertilizer Savings', value: formatCurrency(data.calculations.fertilizerSavings), sub: 'Up to 50% reduction' },
            { label: 'Revenue Increase (Low)', value: formatCurrency(data.calculations.revenueLow), sub: 'At 3% yield increase' },
            { label: 'Revenue Increase (High)', value: formatCurrency(data.calculations.revenueHigh), sub: 'At 70% yield increase' }
        ];

        metrics.forEach((metric, i) => {
            const x = margin + (i * (boxWidth + 15));

            doc.setFillColor(forest[0], forest[1], forest[2]);
            doc.roundedRect(x, y, boxWidth, 75, 6, 6, 'F');

            doc.setTextColor(200, 200, 200);
            doc.setFontSize(9);
            doc.setFont('helvetica', 'normal');
            doc.text(metric.label, x + 12, y + 20);

            doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
            doc.setFontSize(20);
            doc.setFont('helvetica', 'bold');
            doc.text(metric.value, x + 12, y + 48);

            doc.setTextColor(150, 150, 150);
            doc.setFontSize(8);
            doc.setFont('helvetica', 'normal');
            doc.text(metric.sub, x + 12, y + 65);
        });

        y += 95;

        // Farm Details Section
        doc.setTextColor(forest[0], forest[1], forest[2]);
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('Farm Details', margin, y + 20);

        y += 35;

        doc.setFillColor(250, 250, 250);
        doc.roundedRect(margin, y, pageWidth - (margin * 2), 100, 6, 6, 'F');

        const details = [
            ['Farm Name:', data.farmName],
            ['Location:', data.farmLocation],
            ['Operation Type:', data.operationType.charAt(0).toUpperCase() + data.operationType.slice(1)],
            ['Total Acreage:', `${data.totalAcreage.toLocaleString()} acres`],
            ['Fertilizer Cost/Acre:', `$${data.fertilizerCostPerAcre}`]
        ];

        doc.setFontSize(10);
        details.forEach((detail, i) => {
            const row = Math.floor(i / 2);
            const col = i % 2;
            const x = margin + 15 + (col * 250);
            const detailY = y + 25 + (row * 25);

            doc.setTextColor(textGray[0], textGray[1], textGray[2]);
            doc.setFont('helvetica', 'normal');
            doc.text(detail[0], x, detailY);

            doc.setTextColor(textDark[0], textDark[1], textDark[2]);
            doc.setFont('helvetica', 'bold');
            doc.text(detail[1], x + 100, detailY);
        });

        y += 120;

        // Crop Breakdown
        doc.setTextColor(forest[0], forest[1], forest[2]);
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('Crop Breakdown', margin, y + 20);

        y += 35;

        // Table header
        doc.setFillColor(forest[0], forest[1], forest[2]);
        doc.rect(margin, y, pageWidth - (margin * 2), 25, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(9);
        doc.setFont('helvetica', 'bold');
        doc.text('Crop', margin + 10, y + 16);
        doc.text('Acreage', margin + 150, y + 16);
        doc.text('Yield/Acre', margin + 230, y + 16);
        doc.text('Price/Unit', margin + 320, y + 16);
        doc.text('Revenue', margin + 410, y + 16);

        y += 25;

        // Table rows
        data.crops.forEach((crop: any, i: number) => {
            const bgColor: [number, number, number] = i % 2 === 0 ? [255, 255, 255] : [250, 250, 250];
            doc.setFillColor(bgColor[0], bgColor[1], bgColor[2]);
            doc.rect(margin, y, pageWidth - (margin * 2), 22, 'F');

            doc.setTextColor(textDark[0], textDark[1], textDark[2]);
            doc.setFontSize(9);
            doc.setFont('helvetica', 'normal');
            doc.text(crop.type.charAt(0).toUpperCase() + crop.type.slice(1).replace('_', ' '), margin + 10, y + 15);
            doc.text(crop.acreage.toLocaleString(), margin + 150, y + 15);
            doc.text(crop.yieldPerAcre.toLocaleString(), margin + 230, y + 15);
            doc.text('$' + crop.pricePerUnit.toFixed(2), margin + 320, y + 15);
            doc.setFont('helvetica', 'bold');
            doc.text(formatCurrency(crop.revenue), margin + 410, y + 15);

            y += 22;
        });

        // Total row
        doc.setFillColor(brandGreen[0], brandGreen[1], brandGreen[2]);
        doc.rect(margin, y, pageWidth - (margin * 2), 25, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.text('Total Current Revenue', margin + 10, y + 16);
        doc.text(formatCurrency(data.calculations.totalCurrentRevenue), margin + 410, y + 16);

        y += 45;

        // Disclaimer
        doc.setFillColor(254, 243, 199);
        doc.roundedRect(margin, y, pageWidth - (margin * 2), 55, 6, 6, 'F');
        doc.setDrawColor(245, 158, 11);
        doc.setLineWidth(1);
        doc.roundedRect(margin, y, pageWidth - (margin * 2), 55, 6, 6, 'S');

        doc.setTextColor(180, 120, 30);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.text('Important Information', margin + 15, y + 18);

        doc.setTextColor(100, 80, 50);
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        const disclaimer = 'All estimates are based on field trial data and represent potential outcomes. Actual results vary based on soil conditions, weather, crop variety, and management practices. These projections are not guarantees of performance. CropDefense products are OMRI certified for organic use.';
        const disclaimerLines = doc.splitTextToSize(disclaimer, pageWidth - (margin * 2) - 30);
        doc.text(disclaimerLines, margin + 15, y + 32);

        // Footer
        doc.setFillColor(forest[0], forest[1], forest[2]);
        doc.rect(0, pageHeight - 40, pageWidth, 40, 'F');
        doc.setTextColor(150, 150, 150);
        doc.setFontSize(8);
        doc.text('© 2026 CropDefense  •  www.cropdefense.com  •  OMRI Certified Organic', margin, pageHeight - 18);
        if (data.salesRepName) {
            doc.text(`Prepared by: ${data.salesRepName}`, pageWidth - margin - 120, pageHeight - 18);
        }

        return doc;
    }

    const handleSendReport = async () => {
        setIsGenerating(true)
        try {
            // Generate PDF
            const pdfDoc = await generatePDFReport(calculatedData)
            const pdfBlob = pdfDoc.output('blob')

            // Helper to convert blob to base64
            const blobToBase64 = (blob: Blob) => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
                    reader.onerror = reject;
                    reader.readAsDataURL(blob);
                });
            }

            const pdfBase64 = await blobToBase64(pdfBlob)

            const payload = {
                ...calculatedData,
                pdfBase64,
                timestamp: new Date().toISOString()
            }

            // Zapier webhook
            try {
                await fetch('https://hooks.zapier.com/hooks/catch/26236551/ul27glx/', {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'text/plain' },
                    body: JSON.stringify(payload)
                });
            } catch (e) {
                console.log('Webhook sent (no-cors mode)')
            }

            // Save locally
            pdfDoc.save(`CropDefense_Savings_Report_${calculatedData.farmName.replace(/\s+/g, '_')}.pdf`);

            setShowModal(false)
            setShowResults(false)
            setShowSuccess(true)

        } catch (error) {
            console.error(error)
            alert('Error generating report')
        } finally {
            setIsGenerating(false)
        }
    }

    const handleDownload = async () => {
        if (calculatedData) {
            const pdfDoc = await generatePDFReport(calculatedData)
            pdfDoc.save(`CropDefense_Savings_Report_${calculatedData.farmName.replace(/\s+/g, '_')}.pdf`);
        }
    }

    return (
        <>
            {/* Styles are global for page, but scoped via CSS classes */}
            <header className="savings-header">
                <div className="savings-header-inner">
                    <a href="https://www.cropdefense.com" className="savings-logo">
                        <img src="/logo.png" alt="CropDefense" />
                    </a>
                    <span className="header-badge">OMRI Certified • Organic</span>
                </div>
            </header>

            <div className={`main-container ${agentMode ? 'agent-mode-active' : ''}`}>

                {/* Agent Mode Banner */}
                <div className="agent-mode-banner" id="agentModeBanner" style={{ display: agentMode ? 'block' : 'none' }}>
                    <div className="agent-mode-inner">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                        <span><strong>Agent Mode:</strong> You are entering data on behalf of a client. Report will be sent to
                            <strong id="agentModeRepName"> {currentAgent?.name || '-'}</strong></span>
                        <button type="button" className="agent-mode-exit" onClick={exitAgentMode}>Exit Agent Mode</button>
                    </div>
                </div>

                <section className="hero">
                    <div className="hero-tag">Personalized Savings Analysis</div>
                    <h1>
                        {agentMode ? 'Enter Client Data for ' : 'See How CropDefense Can '}
                        <span>{agentMode ? 'Savings Report' : 'Boost Your Profits'}</span>
                    </h1>
                    <p>
                        {agentMode
                            ? "Fill in the client's farm information below. The report will be generated and sent to your email."
                            : "Enter your farm's information below and we'll calculate your potential savings from reduced fertilizer costs and increased yields."}
                    </p>
                </section>

                <div className="metrics-bar">
                    <div className="metric">
                        <div className="metric-value">Up to 50%</div>
                        <div className="metric-label">Fertilizer Reduction</div>
                    </div>
                    <div className="metric">
                        <div className="metric-value">Up to 70%</div>
                        <div className="metric-label">Yield Increase</div>
                    </div>
                    <div className="metric">
                        <div className="metric-value">10+ Years</div>
                        <div className="metric-label">Field Tested</div>
                    </div>
                </div>

                <form id="savingsForm" className="form-card" ref={formRef} onSubmit={(e) => { e.preventDefault(); calculateSavings(); }}>
                    <input type="hidden" id="salesRep" name="salesRep" ref={salesRepSelectRef} />
                    <input type="hidden" id="repEmail" name="repEmail" ref={repEmailInputRef} />

                    {/* Section 1 */}
                    <div className="form-section">
                        <div className="section-header">
                            <span className="section-number">1</span>
                            <span className="section-title">Farm Information</span>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Farm Name <span className="required">*</span></label>
                                <input type="text" className="form-input" id="farmName" name="farmName"
                                    placeholder="e.g., Johnson Family Farms" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Location <span className="required">*</span></label>
                                <input type="text" className="form-input" id="farmLocation" name="farmLocation"
                                    placeholder="e.g., Central Valley, CA" required />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Contact Name <span className="required">*</span></label>
                                <input type="text" className="form-input" id="contactName" name="contactName"
                                    placeholder="Your full name" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email Address <span className="required">*</span></label>
                                <input type="email" className="form-input" id="email" name="email" placeholder="you@example.com"
                                    required />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Phone Number</label>
                                <input type="tel" className="form-input" id="phone" name="phone" placeholder="(555) 123-4567" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Operation Type <span className="required">*</span></label>
                                <select className="form-select" id="operationType" name="operationType" required>
                                    <option value="">Select type...</option>
                                    <option value="conventional">Conventional</option>
                                    <option value="organic">Organic</option>
                                    <option value="transitioning">Transitioning to Organic</option>
                                    <option value="mixed">Mixed</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="form-section">
                        <div className="section-header">
                            <span className="section-number">2</span>
                            <span className="section-title">Crop Details</span>
                            <span className="section-subtitle">Add each crop you grow</span>
                        </div>

                        <div className="crops-container" id="cropsContainer">
                            {crops.map((crop, index) => (
                                <div key={crop.id} className="crop-entry" data-crop-index={index}>
                                    <div className="crop-entry-header">
                                        <span className="crop-entry-title">Crop {index + 1}</span>
                                        <button type="button" className="remove-crop-btn" onClick={() => removeCrop(index)}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="crop-fields four-col">
                                        <div className="form-group">
                                            <label className="form-label">Crop Type <span className="required">*</span></label>
                                            <select className="form-select crop-type" name={`crops[${index}][type]`} required>
                                                <option value="">Select crop...</option>
                                                <option value="corn">Corn</option>
                                                <option value="soybean">Soybean</option>
                                                <option value="wheat">Wheat</option>
                                                <option value="cotton">Cotton</option>
                                                <option value="alfalfa">Alfalfa</option>
                                                <option value="rice">Rice</option>
                                                <option value="barley">Barley</option>
                                                <option value="sorghum">Sorghum</option>
                                                <option value="canola">Canola</option>
                                                <option value="sunflower">Sunflower</option>
                                                <option value="peanut">Peanut</option>
                                                <option value="dry_beans">Dry Beans</option>
                                                <option value="field_peas">Field Peas</option>
                                                <option value="lentils">Lentils</option>
                                                <option value="chickpeas">Chickpeas</option>
                                                <option value="tomatoes">Tomatoes</option>
                                                <option value="potatoes">Potatoes</option>
                                                <option value="onions">Onions</option>
                                                <option value="lettuce">Lettuce/Leafy Greens</option>
                                                <option value="peppers">Peppers</option>
                                                <option value="squash">Squash</option>
                                                <option value="cucumber">Cucumber</option>
                                                <option value="watermelon">Watermelon</option>
                                                <option value="berries">Berries</option>
                                                <option value="sugar_beets">Sugar Beets</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Acreage <span className="required">*</span></label>
                                            <div className="input-with-unit">
                                                <input type="number" className="form-input crop-acreage" name={`crops[${index}][acreage]`}
                                                    placeholder="0" min="1" required onChange={updateTotalAcreage} />
                                                <span className="input-unit">acres</span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Avg. Yield/Acre <span className="required">*</span></label>
                                            <div className="input-with-unit">
                                                <input type="number" className="form-input crop-yield" name={`crops[${index}][yield]`}
                                                    placeholder="0" min="0" step="0.1" required />
                                                <span className="input-unit">units</span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Price/Unit <span className="required">*</span></label>
                                            <div className="input-with-unit">
                                                <input type="number" className="form-input crop-price" name={`crops[${index}][price]`}
                                                    placeholder="0.00" min="0" step="0.01" required />
                                                <span className="input-unit">$/unit</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button type="button" className="add-crop-btn" id="addCropBtn" onClick={addCrop}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                            Add Another Crop
                        </button>
                    </div>

                    {/* Section 3 */}
                    <div className="form-section">
                        <div className="section-header">
                            <span className="section-number">3</span>
                            <span className="section-title">Current Input Costs</span>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Average Fertilizer Cost per Acre <span className="required">*</span></label>
                                <div className="input-with-unit">
                                    <input type="number" className="form-input" id="fertilizerCost" name="fertilizerCost"
                                        placeholder="0.00" min="0" step="0.01" required />
                                    <span className="input-unit">$/acre</span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Total Farm Acreage</label>
                                <div className="input-with-unit">
                                    <input type="number" className="form-input" id="totalAcreage" name="totalAcreage"
                                        placeholder="Auto-calculated" readOnly ref={totalAcreageRef} />
                                    <span className="input-unit">acres</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results Section */}
                    <div className={`results-section ${showResults && !showSuccess ? 'visible' : ''}`} id="resultsSection">
                        <div className="results-header">
                            <h2>Your Projected Savings</h2>
                            <p>Based on the information you provided</p>
                        </div>

                        <div className="results-grid">
                            <div className="result-card">
                                <div className="result-card-label">Fertilizer Savings</div>
                                <div className="result-card-value">{formatCurrency(calculatedData?.calculations.fertilizerSavings || 0)}</div>
                                <div className="result-card-sublabel">Up to 50% reduction</div>
                            </div>
                            <div className="result-card">
                                <div className="result-card-label">Revenue Increase (Low Est.)</div>
                                <div className="result-card-value">{formatCurrency(calculatedData?.calculations.revenueLow || 0)}</div>
                                <div className="result-card-sublabel">At 3% yield increase</div>
                            </div>
                            <div className="result-card">
                                <div className="result-card-label">Revenue Increase (High Est.)</div>
                                <div className="result-card-value">{formatCurrency(calculatedData?.calculations.revenueHigh || 0)}</div>
                                <div className="result-card-sublabel">At 70% yield increase</div>
                            </div>
                        </div>

                        <div className="results-breakdown">
                            <div className="breakdown-row">
                                <span className="breakdown-label">Current Annual Revenue</span>
                                <span className="breakdown-value">{formatCurrency(calculatedData?.calculations.totalCurrentRevenue || 0)}</span>
                            </div>
                            <div className="breakdown-row">
                                <span className="breakdown-label">Current Fertilizer Costs</span>
                                <span className="breakdown-value">{formatCurrency(calculatedData?.calculations.totalFertilizerCost || 0)}</span>
                            </div>
                            <div className="breakdown-row">
                                <span className="breakdown-label">Potential Profit Increase (Conservative)</span>
                                <span className="breakdown-value">{calculatedData?.calculations.profitIncreaseLow || 0}%</span>
                            </div>
                            <div className="breakdown-row">
                                <span className="breakdown-label">Potential Profit Increase (Optimistic)</span>
                                <span className="breakdown-value">{calculatedData?.calculations.profitIncreaseHigh || 0}%</span>
                            </div>
                        </div>
                    </div>

                    {/* Submit Section */}
                    <div className="submit-section" id="submitSection" style={{ display: showSuccess ? 'none' : 'block' }}>
                        {!showResults && (
                            <button type="submit" className="submit-btn calculate-btn" id="calculateBtn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="4" y="2" width="16" height="20" rx="2"></rect>
                                    <line x1="8" y1="6" x2="16" y2="6"></line>
                                    <line x1="8" y1="10" x2="16" y2="10"></line>
                                    <line x1="8" y1="14" x2="12" y2="14"></line>
                                </svg>
                                Calculate My Savings
                            </button>
                        )}

                        {showResults && (
                            <button type="button" className="submit-btn" id="submitBtn" onClick={() => setShowModal(true)}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 2L11 13"></path>
                                    <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
                                </svg>
                                Generate &amp; Send Report
                            </button>
                        )}
                        <p className="submit-note">Your personalized savings report will be generated and emailed to you</p>
                    </div>

                    {/* Success Message */}
                    <div className={`success-message ${showSuccess ? 'visible' : ''}`} id="successMessage" ref={(el) => { if (showSuccess && el) el.scrollIntoView({ behavior: 'smooth', block: 'center' }); }}>
                        <div className="success-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        </div>
                        <h2>{agentMode ? 'Report Generated!' : 'Report Sent!'}</h2>
                        <p>
                            {agentMode
                                ? `The savings report for ${calculatedData?.farmName} has been sent to your email.`
                                : 'Your personalized CropDefense Savings Report has been generated and sent to your sales representative.'}
                        </p>
                        <div className="success-details">
                            <div className="success-details-title">What happens next:</div>
                            {agentMode ? (
                                <>
                                    <p>✓ Report sent to <strong>{calculatedData?.salesRepEmail}</strong></p>
                                    <p>✓ Forward to your client when ready</p>
                                    <p>✓ Contact + Deal created in HubSpot</p>
                                </>
                            ) : (
                                <>
                                    {calculatedData?.salesRepName ? (
                                        <>
                                            <p>✓ Your rep <strong>{calculatedData?.salesRepName}</strong> has received the report</p>
                                            <p>✓ They ll review and send it to you momentarily</p>
                                        </>
                                    ) : (
                                        <>
                                            <p>✓ Report sent to <strong>{calculatedData?.email}</strong></p>
                                            <p>✓ A CropDefense representative will follow up soon</p>
                                        </>
                                    )}
                                    <p>✓ You can also download your copy below</p>
                                </>
                            )}
                        </div>
                        <button type="button" className="submit-btn" style={{ marginTop: '1.5rem' }} onClick={handleDownload}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Download PDF Report
                        </button>
                    </div>

                    {/* Agent Code Section */}
                    {!agentMode && (
                        <div className="form-section agent-code-section" id="agentCodeSection">
                            <div className="section-header">
                                <span className="section-number" style={{ background: 'var(--text-muted)' }}>?</span>
                                <span className="section-title">Working with a CropDefense Rep?</span>
                                <span className="section-subtitle">Optional</span>
                            </div>

                            <div className="agent-code-optional-box">
                                <p>If you've been speaking with a CropDefense sales representative, enter their agent code below to
                                    have your report sent directly to them.</p>
                                <div className="agent-code-input-row">
                                    <input type="text" className="form-input agent-code-input" id="agentCodeInput" ref={agentCodeInputRef}
                                        placeholder="e.g., CD-SMITH" maxLength={20} />
                                    <button type="button" className="agent-code-btn" onClick={applyAgentCode}>Apply Code</button>
                                </div>
                                <p className="agent-code-hint">Don't have a code? No problem — just select your rep from the dropdown
                                    above, or leave blank to receive the report yourself.</p>
                            </div>
                        </div>
                    )}

                    {/* Disclaimer */}
                    <div className="form-section">
                        <div className="disclaimer">
                            <div className="disclaimer-title">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                </svg>
                                Important Information
                            </div>
                            <p>All estimates are based on field trial data and represent potential outcomes. Actual results vary
                                based on soil conditions, weather, crop variety, and management practices. These projections are
                                not guarantees of performance. CropDefense products are OMRI certified for organic use.</p>
                        </div>
                    </div>
                </form>
            </div>

            {/* Modal */}
            <div className={`modal-overlay ${showModal ? 'visible' : ''}`} id="reportModal" onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false) }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h3>Report Ready to Send</h3>
                        <p>Preview your savings report before sending to your rep</p>
                    </div>
                    <div className="modal-body" id="reportPreview">
                        {calculatedData && (
                            <div style={{ padding: '0.5rem' }}>
                                <p style={{ marginBottom: '1rem', color: '#5a5a5a' }}>Report for <strong>{calculatedData.farmName}</strong></p>
                                <div style={{ background: '#f4faf0', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Fertilizer Savings:</span>
                                        <strong style={{ color: '#7EC360' }}>{formatCurrency(calculatedData.calculations.fertilizerSavings)}</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Revenue Increase (Low):</span>
                                        <strong style={{ color: '#7EC360' }}>{formatCurrency(calculatedData.calculations.revenueLow)}</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>Revenue Increase (High):</span>
                                        <strong style={{ color: '#7EC360' }}>{formatCurrency(calculatedData.calculations.revenueHigh)}</strong>
                                    </div>
                                </div>
                                {calculatedData.salesRepName ? (
                                    <div style={{ background: '#1a2e1a', color: 'white', borderRadius: '8px', padding: '1rem' }}>
                                        <div style={{ fontSize: '0.85rem', opacity: 0.8, marginBottom: '0.25rem' }}>Sending to:</div>
                                        <div style={{ fontWeight: 600 }}>{calculatedData.salesRepName}</div>
                                        <div style={{ fontSize: '0.85rem', opacity: 0.7 }}>{calculatedData.salesRepEmail}</div>
                                    </div>
                                ) : (
                                    <div style={{ background: '#f4faf0', border: '2px solid #7EC360', borderRadius: '8px', padding: '1rem' }}>
                                        <div style={{ fontSize: '0.85rem', color: '#5a9c42', marginBottom: '0.25rem' }}>Your report will be sent to:</div>
                                        <div style={{ fontWeight: 600, color: '#1a2e1a' }}>{calculatedData.email}</div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    <div className="modal-actions">
                        <button type="button" className="submit-btn btn-secondary" onClick={() => setShowModal(false)}>Edit Data</button>
                        <button type="button" className="submit-btn" onClick={handleSendReport} disabled={isGenerating}>
                            {isGenerating ? (
                                <span>Generating...</span>
                            ) : (
                                <>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 2L11 13"></path>
                                        <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
                                    </svg>
                                    Send Report Now
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
