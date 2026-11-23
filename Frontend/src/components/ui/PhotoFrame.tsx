import clsx from 'clsx'
import type { ContentImage } from '@/types/content'

type Props = {
  image?: ContentImage
  /** Text shown in the placeholder when no image is provided */
  placeholder?: string
  /** "tag" = cream pill label (banners, branches); "plain" = bare label (menu cards) */
  placeholderStyle?: 'tag' | 'plain'
  className?: string
  loading?: 'lazy' | 'eager'
}

/** Rounded image well. Background colour, size and radius come from className. */
export function PhotoFrame({ image, placeholder = 'Photo', placeholderStyle = 'plain', className, loading = 'lazy' }: Props) {
  return (
    <div className={clsx('relative flex items-center justify-center overflow-hidden', className)}>
      {image ? (
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={loading}
          decoding="async"
          className={clsx(
            'absolute inset-0 size-full',
            image.fit === 'contain' ? 'object-contain p-4' : 'object-cover',
          )}
        />
      ) : (
        <span
          className={clsx(
            'text-label font-bold uppercase tracking-tag',
            placeholderStyle === 'tag' && 'rounded-pill bg-cream px-3 py-1.5 text-espresso',
          )}
        >
          {placeholder}
        </span>
      )}
    </div>
  )
}
