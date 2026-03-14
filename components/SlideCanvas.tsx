import React, { useMemo, forwardRef } from 'react';
import { Slide } from '../types';

interface SlideCanvasProps {
  slide: Slide;
  scale?: number;
}

const SlideCanvas = forwardRef<HTMLDivElement, SlideCanvasProps>(({ slide, scale = 1 }, ref) => {
  const scopeId = useMemo(() => `slide-${slide.id}`, [slide.id]);

  return (
    <div
      ref={ref}
      className={`poster-root ${scopeId}`}
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'top center',
        width: '100%',
        maxWidth: '500px',
        backgroundColor: slide.secondaryColor
      }}
    >
      <style>
        {`
          .${scopeId} {
            ${slide.customCss || ''}
          }
          /* Modern Arabic Typography System */
          .${scopeId} .poster-headline {
            font-size: 36px;
            font-weight: 800;
            line-height: 1.3;
            padding-top: 0.15em;
            padding-bottom: 0.15em;
            margin-bottom: 0.4em;
            display: block;
            word-break: keep-all;
            overflow-wrap: break-word;
            color: var(--text-headline, #0F172A);
          }
          .${scopeId} .poster-desc {
            font-size: 18px;
            font-weight: 400;
            line-height: 1.7;
            padding-top: 0.1em;
            padding-bottom: 0.5em;
            display: block;
            word-break: keep-all;
            color: var(--text-body, #4B5563);
          }
        `}
      </style>

      {/* Grid Pattern Overlay */}
      {slide.showGrid && (
        <div className="absolute-fill grid-pattern pointer-none" style={{ opacity: 0.5 }}></div>
      )}

      {/* Subtle Diagonal Lines Pattern - Modern Background Texture */}
      <div
        className="absolute-fill pointer-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #2563EB 0px,
            #2563EB 1px,
            transparent 1px,
            transparent 10px
          )`,
          opacity: 0.18,
          zIndex: 1
        }}
      />

      {/* Decorative Gradient Background - Softer and More Modern */}
      <div
        className="absolute blur-overlay pointer-none"
        style={{
          background: `linear-gradient(135deg, ${slide.accentColor} 0%, ${slide.accentColor}dd 100%)`,
          width: '20rem',
          height: '20rem',
          top: '-8rem',
          left: '-8rem'
        }}
      />

      {/* Secondary decorative element - bottom right */}
      <div
        className="absolute blur-overlay pointer-none"
        style={{
          background: `linear-gradient(135deg, ${slide.accentColor}44 0%, ${slide.accentColor}22 100%)`,
          width: '16rem',
          height: '16rem',
          bottom: '-6rem',
          right: '-6rem'
        }}
      />

      {/* Large Decorative Number - Centered and pushed down */}
      <div className="absolute-fill poster-number-container pointer-none">
        <div
          className="poster-number"
          style={{
            color: slide.accentColor,
            opacity: 0.8,
            transition: 'all 0.7s',
          }}
        >
          {slide.numberText}
        </div>
      </div>

      {/* Top Left Icon - Modern minimalist design */}
      <div className="poster-icon" style={{ top: '2rem', left: '2rem' }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill={slide.accentColor} style={{ opacity: 0.9, transition: 'colors 0.5s' }}>
          <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
        </svg>
      </div>

      {/* Top Right Logo Slot - Enhanced with subtle background */}
      <div className="poster-logo" style={{ top: '2rem', right: '2rem', opacity: 0.95 }}>
        {slide.logoUrl ? (
          <img
            src={slide.logoUrl}
            alt="Logo"
            style={{ 
              width: '3rem', 
              height: '3rem', 
              objectFit: 'contain',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
            }}
          />
        ) : (
          <div style={{ 
            position: 'relative', 
            width: '3rem', 
            height: '3rem',
            background: `linear-gradient(135deg, ${slide.accentColor}22 0%, ${slide.accentColor}11 100%)`,
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill={slide.accentColor} opacity="0.6">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="poster-content">
        <h1 className="poster-headline">
          {slide.title}
        </h1>
        <p className="poster-desc">
          {slide.description}
        </p>
      </div>
    </div>
  );
});

export default SlideCanvas;
